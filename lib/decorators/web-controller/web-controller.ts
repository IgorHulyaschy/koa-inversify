import { decorate, injectable } from 'inversify'
import { Decorators } from '../constants'

export function webController(subject: string): ClassDecorator {
  return function (constructor: any) {
    decorate(injectable(), constructor)

    const newMetadata = subject
    return Reflect.defineMetadata(Decorators.webController, newMetadata, constructor)
  }
}

export function getWebControllersMetadata(constructor: any): string {
  return Reflect.getMetadata(Decorators.webController, constructor)
}
