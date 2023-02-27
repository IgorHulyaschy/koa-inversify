"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrinterModule = void 0;
const decorators_1 = require("../../../decorators");
const PrinterService_1 = require("./PrinterService");
const PrinterWebController_1 = require("./PrinterWebController");
let PrinterModule = class PrinterModule {
};
PrinterModule = __decorate([
    (0, decorators_1.module)({
        deps: {
            init(local) {
                local.bind(PrinterService_1.PrinterService).toSelf().inSingletonScope();
            },
            webControllers: [PrinterWebController_1.PrinterWebController]
        }
    })
], PrinterModule);
exports.PrinterModule = PrinterModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJpbnRlck1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9leGFtcGxlL3NyYy9wcmludGVyL1ByaW50ZXJNb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsb0RBQTRDO0FBQzVDLHFEQUFpRDtBQUNqRCxpRUFBNkQ7QUFVdEQsSUFBTSxhQUFhLEdBQW5CLE1BQU0sYUFBYTtDQUFHLENBQUE7QUFBaEIsYUFBYTtJQVJ6QixJQUFBLG1CQUFNLEVBQUM7UUFDTixJQUFJLEVBQUU7WUFDSixJQUFJLENBQUMsS0FBSztnQkFDUixLQUFLLENBQUMsSUFBSSxDQUFDLCtCQUFjLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1lBQ3hELENBQUM7WUFDRCxjQUFjLEVBQUUsQ0FBQywyQ0FBb0IsQ0FBQztTQUN2QztLQUNGLENBQUM7R0FDVyxhQUFhLENBQUc7QUFBaEIsc0NBQWEifQ==