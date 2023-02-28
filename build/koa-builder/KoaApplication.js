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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KoaApplication = void 0;
/* eslint-disable @typescript-eslint/no-unused-expressions */
require("reflect-metadata");
const inversify_1 = require("inversify");
const koa_1 = __importDefault(require("koa"));
const ApplicationBuilder_1 = require("./ApplicationBuilder");
let KoaApplication = class KoaApplication extends koa_1.default {
    constructor({ port, logger }) {
        super();
        Object.defineProperty(this, "applicationBuilder", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new ApplicationBuilder_1.ApplicationBuilder()
        });
        Object.defineProperty(this, "port", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "logger", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.port = port;
        this.logger = logger;
    }
    async start(ioc) {
        await this.init();
        this.initControllers(ioc);
        this.listen(this.port, () => {
            this.logger ? this.logger.info(`Server is starting on port ${this.port}`) : {};
        });
    }
    initControllers(ioc) {
        const routers = this.applicationBuilder.buildHttpControllers(ioc);
        routers.forEach((router) => this.use(router.routes()));
    }
};
KoaApplication = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [Object])
], KoaApplication);
exports.KoaApplication = KoaApplication;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS29hQXBwbGljYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIva29hLWJ1aWxkZXIvS29hQXBwbGljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQTZEO0FBQzdELDRCQUF5QjtBQUN6Qix5Q0FBc0M7QUFDdEMsOENBQXFCO0FBQ3JCLDZEQUF5RDtBQUtsRCxJQUFlLGNBQWMsR0FBN0IsTUFBZSxjQUFlLFNBQVEsYUFBRztJQUs5QyxZQUFZLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBcUM7UUFDN0QsS0FBSyxFQUFFLENBQUE7UUFMVDs7OzttQkFBc0MsSUFBSSx1Q0FBa0IsRUFBRTtXQUFBO1FBQzlEOzs7OztXQUE2QjtRQUM3Qjs7Ozs7V0FBd0I7UUFJdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7SUFDdEIsQ0FBQztJQUlELEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBa0I7UUFDNUIsTUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7UUFFakIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO1lBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDhCQUE4QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO1FBQ2hGLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVPLGVBQWUsQ0FBQyxHQUFrQjtRQUN4QyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDakUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ3hELENBQUM7Q0FDRixDQUFBO0FBMUJxQixjQUFjO0lBRG5DLElBQUEsc0JBQVUsR0FBRTs7R0FDUyxjQUFjLENBMEJuQztBQTFCcUIsd0NBQWMifQ==