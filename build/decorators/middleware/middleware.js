"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = exports.getMiddlewaresMetadata = exports.useMiddleware = void 0;
const inversify_1 = require("inversify");
const constants_1 = require("../constants");
function useMiddleware(constructor) {
    return function (target, prKey, descriptor) {
        const previusValue = Reflect.getMetadata(constants_1.Decorators.middleware, target);
        let metadata = [{ constructor, handlerName: prKey }];
        if (previusValue)
            metadata = [...previusValue, { constructor, handlerName: prKey }];
        return Reflect.defineMetadata(constants_1.Decorators.middleware, metadata, target);
    };
}
exports.useMiddleware = useMiddleware;
function getMiddlewaresMetadata(target) {
    return Reflect.getMetadata(constants_1.Decorators.middleware, target);
}
exports.getMiddlewaresMetadata = getMiddlewaresMetadata;
function middleware() {
    return function (constructor) {
        (0, inversify_1.decorate)((0, inversify_1.injectable)(), constructor);
    };
}
exports.middleware = middleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9kZWNvcmF0b3JzL21pZGRsZXdhcmUvbWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx5Q0FBZ0Q7QUFFaEQsNENBQXlDO0FBRXpDLFNBQWdCLGFBQWEsQ0FBQyxXQUE4QjtJQUMxRCxPQUFPLFVBQVUsTUFBTSxFQUFFLEtBQUssRUFBRSxVQUFVO1FBQ3hDLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsc0JBQVUsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDdkUsSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtRQUNwRCxJQUFJLFlBQVk7WUFBRSxRQUFRLEdBQUcsQ0FBQyxHQUFHLFlBQVksRUFBRSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtRQUVuRixPQUFPLE9BQU8sQ0FBQyxjQUFjLENBQUMsc0JBQVUsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQ3hFLENBQUMsQ0FBQTtBQUNILENBQUM7QUFSRCxzQ0FRQztBQUVELFNBQWdCLHNCQUFzQixDQUFDLE1BQVc7SUFJaEQsT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDLHNCQUFVLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0FBQzNELENBQUM7QUFMRCx3REFLQztBQUVELFNBQWdCLFVBQVU7SUFDeEIsT0FBTyxVQUFVLFdBQVc7UUFDMUIsSUFBQSxvQkFBUSxFQUFDLElBQUEsc0JBQVUsR0FBRSxFQUFFLFdBQVcsQ0FBQyxDQUFBO0lBQ3JDLENBQUMsQ0FBQTtBQUNILENBQUM7QUFKRCxnQ0FJQyJ9