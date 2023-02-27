import { Middleware } from '../../koa-builder/interfaces'
import { decorate, injectable } from 'inversify'
import { Class } from 'type-fest'
import { Decorators } from '../constants'

export function useMiddleware(constructor: Class<Middleware>): MethodDecorator {
  return function (target, prKey, descriptor) {
    const previusValue = Reflect.getMetadata(Decorators.middleware, target)
    let metadata = [{ constructor, handlerName: prKey }]
    if (previusValue) metadata = [...previusValue, { constructor, handlerName: prKey }]

    return Reflect.defineMetadata(Decorators.middleware, metadata, target)
  }
}

export function getMiddlewaresMetadata(target: any): Array<{
  constructor: Class<Middleware>
  handlerName: string
}> {
  return Reflect.getMetadata(Decorators.middleware, target)
}

export function middleware(): ClassDecorator {
  return function (constructor) {
    decorate(injectable(), constructor)
  }
}
