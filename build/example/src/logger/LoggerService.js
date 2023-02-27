"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const inversify_1 = require("inversify");
let Logger = class Logger {
    info(...any) {
        console.log(...any);
    }
};
Logger = __decorate([
    (0, inversify_1.injectable)()
], Logger);
exports.Logger = Logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VyU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9leGFtcGxlL3NyYy9sb2dnZXIvTG9nZ2VyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx5Q0FBc0M7QUFJL0IsSUFBTSxNQUFNLEdBQVosTUFBTSxNQUFNO0lBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQVU7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFBO0lBQ3JCLENBQUM7Q0FDRixDQUFBO0FBSlksTUFBTTtJQURsQixJQUFBLHNCQUFVLEdBQUU7R0FDQSxNQUFNLENBSWxCO0FBSlksd0JBQU0ifQ==