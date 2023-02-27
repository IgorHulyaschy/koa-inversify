import { Container } from 'inversify'
import 'reflect-metadata'
import { Class } from 'type-fest'
import { Module } from '../../module-factory'

const smb = Symbol('module')

export function module(module?: {
  imports?: Module[]
  deps: {
    init: (container: Container) => void
    webControllers?: Array<Class<any>>
  }
}): ClassDecorator {
  return function (constructor) {
    if (!module) return
    return Reflect.defineMetadata(smb, module, constructor)
  }
}

export function getModuleMetadata(target: any): {
  imports?: Module[]
  deps: {
    init: (container: Container) => void
    webControllers?: Array<Class<any>>
  }
} {
  return Reflect.getMetadata(smb, target)
}
