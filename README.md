## Installation

Koa requires __node v12.17.0__ or higher for ES2015 and async function support.

```
npm i koa-inversify
```

You also need to install
```
npm i inversify
```
---
## [Full example of project](https://github.com/IgorHulyaschy/koa-inversify/tree/main/lib/example/src) 

---

## Hello koa-inversify

## Features:
1. [How to init project](https://github.com/IgorHulyaschy/koa-inversify#init-project)
2. [WebController](https://github.com/IgorHulyaschy/koa-inversify#webcontrollers)
3. [Middlewares](https://github.com/IgorHulyaschy/koa-inversify#middlewares)
5. [Domain logic](https://github.com/IgorHulyaschy/koa-inversify#domain-logic)
4. [DomainModules like in nestjs](https://github.com/IgorHulyaschy/koa-inversify#domain-modules)


### Structure of project

```
repo
-src
--App.ts
--index.ts
--AppModule.ts
---some-domain-name
---SomeDomainService.ts
---SomeDomainModule.ts
---SomeDomainWebController.ts
```

### Init project

`src/App.ts`

```js
import { KoaApplication } from 'koa-inversify'
import { injectable } from 'inversify'

@injectable()
export class App extends KoaApplication {
  constructor(
    @inject(TYPES.Options) { port }: { port: number }, 

    // if you has custom logger you can use your own
    readonly logger: Logger | undefined
    ) {
    super({ port, logger })
  }

  async init(): Promise<void> {
    // add here any middlewares you need (koa-body, koa-cors)
  }
}
```

`src/AppModule.ts`
```js
import { module } from 'koa-inversify'
import { SomeDomainModule } from './some-domain/SomeDomainModule'

export const TYPES = {
  Options: Symbol('Options')
}

// you can create custom module in case 
// you want to get options from config and bind it to some interface
@module()
export class AppModule {
  static register(options: { port: number }): Module {
    return {
      imports: [SomeDomainModule],
      deps: {
        init(local) {
          local.bind(App).toSelf().inSingletonScope()
          local.bind(TYPES.Options).toConstantValue(options)
        }
      }
    }
  }
}
```

## Domain logic 
`src/some-domain/SomeDomainService.ts`

```js
import { inejctable } from 'inversify'

@injectable
export class SomeDomainService {
  // here is your buisness logic
  sayHello(): void {
    console.log('Hello world')
  }
}
```

## Middlewares
`src/some-domain/middlewares/AuthMiddleware.ts`

```js
import { inejctable } from 'inversify'
import { middleware } from 'koa-inversify'

@middleware()
export class AuthMiddleware {
  // here is your buisness logic
  use(ctx: Context, next: Next): Promise<any> {
    // some jwt or any other logic
  }
}
```

## WebControllers
`src/some-domain/SomeDomainWebController.ts`

```js
import { inejctable } from 'inversify'
import { get, useMiddleware, Context } from 'koa-inversify'
import { AuthMiddleware } from './middlewares/AuthMiddleware'

@webController('/some-domain')
export class SomeDomainWebController {
  constructor(private readonly service: SomeDomainService) {}

  //enpoint will be - GET http://localhost:port/some-domain/sayHello
  @useMiddleware(AuthMiddleware)
  @get('/sayHello')
  sayHello(ctx: Context): void {
    ctx.body = this.service.sayHello()
    ctx.body = 200
  }
}
```
## Domain Modules
`src/some-domain/SomeDomainModule.ts`

```js
@module({
  deps: {
    init(container) {
      container.bind(SomeDomainService).toSelf().inSingletonScope()
    }
  }
})
export class SomeDomainModule {}
```

## Finally 
`./src/index.ts`

```js
import { ModuleFactory } from 'koa-inversify'
import { App } from './App'

function main(): Promise<void> {
  const ioc = new ModuleFactory(AppModule.register({ port: 3000 }))

  const app = ioc.get(App)
  return app.start(ioc)
}

main()
```
