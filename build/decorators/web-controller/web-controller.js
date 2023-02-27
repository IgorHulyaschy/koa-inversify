"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWebControllersMetadata = exports.webController = void 0;
const inversify_1 = require("inversify");
const constants_1 = require("../constants");
function webController(subject) {
    return function (constructor) {
        (0, inversify_1.decorate)((0, inversify_1.injectable)(), constructor);
        const newMetadata = subject;
        return Reflect.defineMetadata(constants_1.Decorators.webController, newMetadata, constructor);
    };
}
exports.webController = webController;
function getWebControllersMetadata(constructor) {
    return Reflect.getMetadata(constants_1.Decorators.webController, constructor);
}
exports.getWebControllersMetadata = getWebControllersMetadata;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLWNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvZGVjb3JhdG9ycy93ZWItY29udHJvbGxlci93ZWItY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBZ0Q7QUFDaEQsNENBQXlDO0FBRXpDLFNBQWdCLGFBQWEsQ0FBQyxPQUFlO0lBQzNDLE9BQU8sVUFBVSxXQUFnQjtRQUMvQixJQUFBLG9CQUFRLEVBQUMsSUFBQSxzQkFBVSxHQUFFLEVBQUUsV0FBVyxDQUFDLENBQUE7UUFFbkMsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFBO1FBQzNCLE9BQU8sT0FBTyxDQUFDLGNBQWMsQ0FBQyxzQkFBVSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUE7SUFDbkYsQ0FBQyxDQUFBO0FBQ0gsQ0FBQztBQVBELHNDQU9DO0FBRUQsU0FBZ0IseUJBQXlCLENBQUMsV0FBZ0I7SUFDeEQsT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDLHNCQUFVLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFBO0FBQ25FLENBQUM7QUFGRCw4REFFQyJ9