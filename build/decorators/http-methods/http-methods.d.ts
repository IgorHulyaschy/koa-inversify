import { HTTPMethods } from '../constants';
export declare function get(path: string): MethodDecorator;
export declare function post(path: string): MethodDecorator;
export declare function put(path: string): MethodDecorator;
export declare function del(path: string): MethodDecorator;
export declare function getHttpHandlersMetadata(target: any): Array<{
    path: string;
    handlerName: string;
    httpMethod: HTTPMethods;
}>;
//# sourceMappingURL=http-methods.d.ts.map