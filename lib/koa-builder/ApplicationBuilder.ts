import Router from '@koa/router'

import {
  getHttpHandlersMetadata,
  getMiddlewaresMetadata,
  getWebControllersMetadata
} from '../decorators'
import { ModuleFactory } from '../module-factory'
import { Middleware } from './interfaces'

export class ApplicationBuilder {
  buildHttpControllers(ioc: ModuleFactory): Router[] {
    return ioc.globalWebControllers.map((ctor) => {
      const router = new Router()
      const controller = ioc.get(ctor)

      const controllerMetadata = getWebControllersMetadata(ctor)
      const handlersMetadata = getHttpHandlersMetadata(controller)
      const middlewaresMetadata = getMiddlewaresMetadata(controller)

      for (const metadata of handlersMetadata) {
        const middlewares = middlewaresMetadata
          ? middlewaresMetadata.filter(({ handlerName }) => metadata.handlerName === handlerName)
          : null

        if (!middlewares?.length) {
          router[metadata.httpMethod](
            controllerMetadata + metadata.path,
            controller[metadata.handlerName as keyof typeof controller].bind(controller)
          )
          continue
        }

        const [middeware, ...otherMiddlewares] = middlewares.map(({ constructor }) => {
          const middleware = ioc.get<Middleware>(constructor)
          return middleware.use.bind(middleware)
        })

        router[metadata.httpMethod](
          controllerMetadata + metadata.path,
          middeware,
          ...otherMiddlewares,
          controller[metadata.handlerName as keyof typeof controller].bind(controller)
        )
      }

      return router
    })
  }
}
