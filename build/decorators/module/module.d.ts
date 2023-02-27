import { Container } from 'inversify';
import 'reflect-metadata';
import { Class } from 'type-fest';
import { Module } from '../../module-factory';
export declare function module(module?: {
    imports?: Module[];
    deps: {
        init: (container: Container) => void;
        webControllers?: Array<Class<any>>;
    };
}): ClassDecorator;
export declare function getModuleMetadata(target: any): {
    imports?: Module[];
    deps: {
        init: (container: Container) => void;
        webControllers?: Array<Class<any>>;
    };
};
//# sourceMappingURL=module.d.ts.map