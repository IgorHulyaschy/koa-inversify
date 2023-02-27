"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerModule = void 0;
const decorators_1 = require("../../../decorators");
const LoggerService_1 = require("./LoggerService");
let LoggerModule = class LoggerModule {
};
LoggerModule = __decorate([
    (0, decorators_1.module)({
        deps: {
            init(local) {
                local.bind(LoggerService_1.Logger).toSelf().inSingletonScope();
            }
        }
    })
], LoggerModule);
exports.LoggerModule = LoggerModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VyTW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbGliL2V4YW1wbGUvc3JjL2xvZ2dlci9Mb2dnZXJNb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsb0RBQTRDO0FBQzVDLG1EQUF3QztBQVNqQyxJQUFNLFlBQVksR0FBbEIsTUFBTSxZQUFZO0NBQUcsQ0FBQTtBQUFmLFlBQVk7SUFQeEIsSUFBQSxtQkFBTSxFQUFDO1FBQ04sSUFBSSxFQUFFO1lBQ0osSUFBSSxDQUFDLEtBQUs7Z0JBQ1IsS0FBSyxDQUFDLElBQUksQ0FBQyxzQkFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtZQUNoRCxDQUFDO1NBQ0Y7S0FDRixDQUFDO0dBQ1csWUFBWSxDQUFHO0FBQWYsb0NBQVkifQ==