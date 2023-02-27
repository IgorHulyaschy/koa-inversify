import { Container } from 'inversify'
import { Class } from 'type-fest'

export interface Module {
  imports?: Array<Module | Class<any>>
  deps: {
    init: (container: Container) => void | Promise<void>
    webControllers?: Array<Class<any>>
  }
}
