import { Middleware } from '../../koa-builder/interfaces';
import { Class } from 'type-fest';
export declare function useMiddleware(constructor: Class<Middleware>): MethodDecorator;
export declare function getMiddlewaresMetadata(target: any): Array<{
    constructor: Class<Middleware>;
    handlerName: string;
}>;
export declare function middleware(): ClassDecorator;
//# sourceMappingURL=middleware.d.ts.map