import { Container, interfaces } from 'inversify';
import { Class } from 'type-fest';
import { Module } from './interfaces';
export declare class ModuleFactory {
    private readonly appModule;
    mainContainer: Container;
    globalWebControllers: Array<Class<any>>;
    constructor(appModule: Module);
    private defineControllers;
    init(): void;
    get<T>(servicesIdentifier: interfaces.ServiceIdentifier<T>): T;
    getContainer(): Container;
}
//# sourceMappingURL=ModuleFactory.d.ts.map