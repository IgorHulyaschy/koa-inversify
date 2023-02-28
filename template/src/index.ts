import { ModuleFactory } from 'koa-inversify'
import { App } from './App'
import { AppModule } from './AppModule'

function main(): Promise<void> {
  const ioc = new ModuleFactory(AppModule.register({ port: 3000 }))

  const app = ioc.get(App)
  return app.start(ioc)
}

main()
