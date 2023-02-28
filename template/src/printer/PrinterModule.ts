import { module } from 'koa-inversify'

import { PrinterService } from './PrinterService'
import { PrinterWebController } from './PrinterWebController'

@module({
  deps: {
    init(local) {
      local.bind(PrinterService).toSelf().inSingletonScope()
    },
    webControllers: [PrinterWebController]
  }
})
export class PrinterModule {}
