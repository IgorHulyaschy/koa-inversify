"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = exports.TYPES = void 0;
const decorators_1 = require("../../decorators");
const App_1 = require("./App");
const logger_1 = require("./logger");
const printer_1 = require("./printer");
exports.TYPES = {
    Options: Symbol('Options')
};
let AppModule = class AppModule {
    static register(options) {
        return {
            imports: [logger_1.LoggerModule, printer_1.PrinterModule],
            deps: {
                init(local) {
                    local.bind(App_1.App).toSelf().inSingletonScope();
                    local.bind(exports.TYPES.Options).toConstantValue(options);
                }
            }
        };
    }
};
AppModule = __decorate([
    (0, decorators_1.module)()
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwTW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL2V4YW1wbGUvc3JjL0FwcE1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxpREFBeUM7QUFFekMsK0JBQTJCO0FBQzNCLHFDQUF1QztBQUN2Qyx1Q0FBeUM7QUFFNUIsUUFBQSxLQUFLLEdBQUc7SUFDbkIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUM7Q0FDM0IsQ0FBQTtBQUdNLElBQU0sU0FBUyxHQUFmLE1BQU0sU0FBUztJQUNwQixNQUFNLENBQUMsUUFBUSxDQUFDLE9BQXlCO1FBQ3ZDLE9BQU87WUFDTCxPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFFLHVCQUFhLENBQUM7WUFDdEMsSUFBSSxFQUFFO2dCQUNKLElBQUksQ0FBQyxLQUFLO29CQUNSLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtvQkFDM0MsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFBO2dCQUNwRCxDQUFDO2FBQ0Y7U0FDRixDQUFBO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUFaWSxTQUFTO0lBRHJCLElBQUEsbUJBQU0sR0FBRTtHQUNJLFNBQVMsQ0FZckI7QUFaWSw4QkFBUyJ9