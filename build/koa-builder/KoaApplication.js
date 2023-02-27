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
        this.listen(this.port, () => this.logger.info(`Server is starting on port ${this.port}`));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS29hQXBwbGljYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIva29hLWJ1aWxkZXIvS29hQXBwbGljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEJBQXlCO0FBQ3pCLHlDQUFzQztBQUN0Qyw4Q0FBcUI7QUFDckIsNkRBQXlEO0FBS2xELElBQWUsY0FBYyxHQUE3QixNQUFlLGNBQWUsU0FBUSxhQUFHO0lBSzlDLFlBQVksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFvQztRQUM1RCxLQUFLLEVBQUUsQ0FBQTtRQUxUOzs7O21CQUFzQyxJQUFJLHVDQUFrQixFQUFFO1dBQUE7UUFDOUQ7Ozs7O1dBQTZCO1FBQzdCOzs7OztXQUF1QjtRQUlyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtJQUN0QixDQUFDO0lBSUQsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFrQjtRQUM1QixNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUVqQixJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyw4QkFBOEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUMzRixDQUFDO0lBRU8sZUFBZSxDQUFDLEdBQWtCO1FBQ3hDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNqRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDeEQsQ0FBQztDQUNGLENBQUE7QUF4QnFCLGNBQWM7SUFEbkMsSUFBQSxzQkFBVSxHQUFFOztHQUNTLGNBQWMsQ0F3Qm5DO0FBeEJxQix3Q0FBYyJ9