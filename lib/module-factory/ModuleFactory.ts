import { Container, interfaces } from 'inversify'
import { Class } from 'type-fest'
import { getModuleMetadata } from '../decorators'
import { KoaApplication } from '../koa-builder'
import { Module } from './interfaces'

export class ModuleFactory {
  mainContainer = new Container()
  globalWebControllers: Array<Class<any>> = []
  constructor(private readonly appModule: Module) {
    this.init()
  }

  private defineControllers(ctor: Module): void {
    if (ctor.deps) {
      if (ctor.deps.webControllers) {
        ctor.deps.webControllers.forEach((controller) => {
          this.mainContainer.bind(controller).toSelf().inSingletonScope()
          this.globalWebControllers.push(controller)
        })
      }
      ctor.deps.init(this.mainContainer)
    }
  }

  init(): void {
    this.mainContainer.bind(KoaApplication).toSelf().inSingletonScope()

    const { imports, deps } = this.appModule
    if (imports) {
      imports.forEach((module) => {
        const moduleMetadata = getModuleMetadata(module)
        if (!moduleMetadata && 'deps' in module) return this.defineControllers(module)

        return this.defineControllers(moduleMetadata)
      })
    }

    if (deps) {
      deps.init(this.mainContainer)
    }
  }

  get<T>(servicesIdentifier: interfaces.ServiceIdentifier<T>): T {
    return this.mainContainer.get(servicesIdentifier)
  }

  getContainer(): Container {
    return this.mainContainer
  }
}
