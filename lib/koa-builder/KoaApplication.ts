import 'reflect-metadata'
import { injectable } from 'inversify'
import Koa from 'koa'
import { ApplicationBuilder } from './ApplicationBuilder'
import { ModuleFactory } from '../module-factory'
import { Logger } from './interfaces'

@injectable()
export abstract class KoaApplication extends Koa {
  private readonly applicationBuilder = new ApplicationBuilder()
  private readonly port: number
  readonly logger: Logger

  constructor({ port, logger }: { port: number; logger: Logger }) {
    super()
    this.port = port
    this.logger = logger
  }

  abstract init(): Promise<void>

  async start(ioc: ModuleFactory): Promise<void> {
    await this.init()

    this.initControllers(ioc)
    this.listen(this.port, () => this.logger.info(`Server is starting on port ${this.port}`))
  }

  private initControllers(ioc: ModuleFactory): void {
    const routers = this.applicationBuilder.buildHttpControllers(ioc)
    routers.forEach((router) => this.use(router.routes()))
  }
}
