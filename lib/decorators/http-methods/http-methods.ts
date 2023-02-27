import { Decorators, HTTPMethods } from '../constants'

function handler({ path, httpMethod }: { path: string; httpMethod: HTTPMethods }): MethodDecorator {
  return function (target, handlerName, descriptor) {
    let metadataToSet = [{ path, handlerName, httpMethod }]
    const previusValue = Reflect.getMetadata(Decorators.httpMethods, target)

    if (previusValue) metadataToSet = [...previusValue, { path, handlerName, httpMethod }]

    return Reflect.defineMetadata(Decorators.httpMethods, metadataToSet, target)
  }
}

export function get(path: string): MethodDecorator {
  return handler({ path, httpMethod: HTTPMethods.GET })
}

export function post(path: string): MethodDecorator {
  return handler({ path, httpMethod: HTTPMethods.POST })
}

export function put(path: string): MethodDecorator {
  return handler({ path, httpMethod: HTTPMethods.PUT })
}

export function del(path: string): MethodDecorator {
  return handler({ path, httpMethod: HTTPMethods.DELETE })
}

export function getHttpHandlersMetadata(
  target: any
): Array<{ path: string; handlerName: string; httpMethod: HTTPMethods }> {
  return Reflect.getMetadata(Decorators.httpMethods, target)
}
