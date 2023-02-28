import { get, webController, Context } from 'koa-inversify'

import { PrinterService } from './PrinterService'

@webController('/printer')
export class PrinterWebController {
  constructor(private readonly service: PrinterService) {}

  @get('/hello')
  sayHello(ctx: Context): void {
    ctx.body = this.service.sayHello()
  }
}
