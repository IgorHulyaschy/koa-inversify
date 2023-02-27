import { KoaApplication } from '../../koa-builder';
import { Logger } from './logger';
export declare class App extends KoaApplication {
    readonly logger: Logger;
    constructor({ port }: {
        port: number;
    }, logger: Logger);
    init(): Promise<void>;
}
//# sourceMappingURL=App.d.ts.map