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
exports.PrinterWebController = void 0;
const decorators_1 = require("../../../decorators");
const PrinterService_1 = require("./PrinterService");
let PrinterWebController = class PrinterWebController {
    constructor(service) {
        Object.defineProperty(this, "service", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: service
        });
    }
    sayHello(ctx) {
        ctx.body = this.service.sayHello();
    }
};
__decorate([
    (0, decorators_1.get)('/hello'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PrinterWebController.prototype, "sayHello", null);
PrinterWebController = __decorate([
    (0, decorators_1.webController)('/printer'),
    __metadata("design:paramtypes", [PrinterService_1.PrinterService])
], PrinterWebController);
exports.PrinterWebController = PrinterWebController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJpbnRlcldlYkNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvZXhhbXBsZS9zcmMvcHJpbnRlci9QcmludGVyV2ViQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxvREFBd0Q7QUFFeEQscURBQWlEO0FBRzFDLElBQU0sb0JBQW9CLEdBQTFCLE1BQU0sb0JBQW9CO0lBQy9CLFlBQTZCLE9BQXVCOzs7OzttQkFBdkI7O0lBQTBCLENBQUM7SUFHeEQsUUFBUSxDQUFDLEdBQVk7UUFDbkIsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ3BDLENBQUM7Q0FDRixDQUFBO0FBSkM7SUFBQyxJQUFBLGdCQUFHLEVBQUMsUUFBUSxDQUFDOzs7O29EQUdiO0FBTlUsb0JBQW9CO0lBRGhDLElBQUEsMEJBQWEsRUFBQyxVQUFVLENBQUM7cUNBRWMsK0JBQWM7R0FEekMsb0JBQW9CLENBT2hDO0FBUFksb0RBQW9CIn0=