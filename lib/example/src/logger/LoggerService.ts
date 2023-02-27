import { injectable } from 'inversify'
import { Logger as ILogger } from '../../../koa-builder/interfaces'

@injectable()
export class Logger implements ILogger {
  info(...any: any[]): void {
    console.log(...any)
  }
}
