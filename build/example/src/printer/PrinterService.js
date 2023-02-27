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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrinterService = void 0;
const inversify_1 = require("inversify");
const logger_1 = require("../logger");
let PrinterService = class PrinterService {
    constructor(logger) {
        Object.defineProperty(this, "logger", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: logger
        });
    }
    sayHello() {
        this.logger.info('Hello world');
        return { message: 'Hello world' };
    }
};
PrinterService = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [logger_1.Logger])
], PrinterService);
exports.PrinterService = PrinterService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJpbnRlclNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvZXhhbXBsZS9zcmMvcHJpbnRlci9QcmludGVyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBc0M7QUFDdEMsc0NBQWtDO0FBRzNCLElBQU0sY0FBYyxHQUFwQixNQUFNLGNBQWM7SUFDekIsWUFBNkIsTUFBYzs7Ozs7bUJBQWQ7O0lBQWlCLENBQUM7SUFDL0MsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQy9CLE9BQU8sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLENBQUE7SUFDbkMsQ0FBQztDQUNGLENBQUE7QUFOWSxjQUFjO0lBRDFCLElBQUEsc0JBQVUsR0FBRTtxQ0FFMEIsZUFBTTtHQURoQyxjQUFjLENBTTFCO0FBTlksd0NBQWMifQ==