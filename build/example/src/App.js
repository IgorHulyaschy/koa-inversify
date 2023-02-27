"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const inversify_1 = require("inversify");
const koa_builder_1 = require("../../koa-builder");
const AppModule_1 = require("./AppModule");
const logger_1 = require("./logger");
let App = class App extends koa_builder_1.KoaApplication {
    constructor({ port }, logger) {
        super({ port, logger });
        Object.defineProperty(this, "logger", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: logger
        });
    }
    async init() {
        // add here any middlewares you need (koa-body, koa-cors)
    }
};
App = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(AppModule_1.TYPES.Options)),
    __metadata("design:paramtypes", [Object, logger_1.Logger])
], App);
exports.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL2V4YW1wbGUvc3JjL0FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBOEM7QUFDOUMsbURBQWtEO0FBQ2xELDJDQUFtQztBQUNuQyxxQ0FBaUM7QUFHMUIsSUFBTSxHQUFHLEdBQVQsTUFBTSxHQUFJLFNBQVEsNEJBQWM7SUFDckMsWUFBbUMsRUFBRSxJQUFJLEVBQW9CLEVBQVcsTUFBYztRQUNwRixLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQTs7Ozs7bUJBRCtDOztJQUV4RSxDQUFDO0lBRUQsS0FBSyxDQUFDLElBQUk7UUFDUix5REFBeUQ7SUFDM0QsQ0FBQztDQUNGLENBQUE7QUFSWSxHQUFHO0lBRGYsSUFBQSxzQkFBVSxHQUFFO0lBRUUsV0FBQSxJQUFBLGtCQUFNLEVBQUMsaUJBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTs2Q0FBOEMsZUFBTTtHQUQzRSxHQUFHLENBUWY7QUFSWSxrQkFBRyJ9