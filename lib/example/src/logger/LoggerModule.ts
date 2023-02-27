import { module } from '../../../decorators'
import { Logger } from './LoggerService'

@module({
  deps: {
    init(local) {
      local.bind(Logger).toSelf().inSingletonScope()
    }
  }
})
export class LoggerModule {}
