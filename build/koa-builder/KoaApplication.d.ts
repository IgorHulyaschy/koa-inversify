import 'reflect-metadata';
import Koa from 'koa';
import { ModuleFactory } from '../module-factory';
import { Logger } from './interfaces';
export declare abstract class KoaApplication extends Koa {
    private readonly applicationBuilder;
    private readonly port;
    readonly logger?: Logger;
    constructor({ port, logger }: {
        port: number;
        logger?: Logger;
    });
    abstract init(): Promise<void>;
    start(ioc: ModuleFactory): Promise<void>;
    private initControllers;
}
//# sourceMappingURL=KoaApplication.d.ts.map