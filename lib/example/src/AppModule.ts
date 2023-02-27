import { module } from '../../decorators'
import { Module } from '../../module-factory'
import { App } from './App'
import { LoggerModule } from './logger'
import { PrinterModule } from './printer'

export const TYPES = {
  Options: Symbol('Options')
}

@module()
export class AppModule {
  static register(options: { port: number }): Module {
    return {
      imports: [LoggerModule, PrinterModule],
      deps: {
        init(local) {
          local.bind(App).toSelf().inSingletonScope()
          local.bind(TYPES.Options).toConstantValue(options)
        }
      }
    }
  }
}
