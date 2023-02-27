import { injectable } from 'inversify'
import { Logger } from '../logger'

@injectable()
export class PrinterService {
  constructor(private readonly logger: Logger) {}
  sayHello(): any {
    this.logger.info('Hello world')
    return { message: 'Hello world' }
  }
}
