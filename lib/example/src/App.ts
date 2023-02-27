import { inject, injectable } from 'inversify'
import { KoaApplication } from '../../koa-builder'
import { TYPES } from './AppModule'
import { Logger } from './logger'

@injectable()
export class App extends KoaApplication {
  constructor(@inject(TYPES.Options) { port }: { port: number }, readonly logger: Logger) {
    super({ port, logger })
  }

  async init(): Promise<void> {
    // add here any middlewares you need (koa-body, koa-cors)
  }
}
