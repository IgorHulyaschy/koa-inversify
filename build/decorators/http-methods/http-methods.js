"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHttpHandlersMetadata = exports.del = exports.put = exports.post = exports.get = void 0;
const constants_1 = require("../constants");
function handler({ path, httpMethod }) {
    return function (target, handlerName, descriptor) {
        let metadataToSet = [{ path, handlerName, httpMethod }];
        const previusValue = Reflect.getMetadata(constants_1.Decorators.httpMethods, target);
        if (previusValue)
            metadataToSet = [...previusValue, { path, handlerName, httpMethod }];
        return Reflect.defineMetadata(constants_1.Decorators.httpMethods, metadataToSet, target);
    };
}
function get(path) {
    return handler({ path, httpMethod: constants_1.HTTPMethods.GET });
}
exports.get = get;
function post(path) {
    return handler({ path, httpMethod: constants_1.HTTPMethods.POST });
}
exports.post = post;
function put(path) {
    return handler({ path, httpMethod: constants_1.HTTPMethods.PUT });
}
exports.put = put;
function del(path) {
    return handler({ path, httpMethod: constants_1.HTTPMethods.DELETE });
}
exports.del = del;
function getHttpHandlersMetadata(target) {
    return Reflect.getMetadata(constants_1.Decorators.httpMethods, target);
}
exports.getHttpHandlersMetadata = getHttpHandlersMetadata;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1tZXRob2RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL2RlY29yYXRvcnMvaHR0cC1tZXRob2RzL2h0dHAtbWV0aG9kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw0Q0FBc0Q7QUFFdEQsU0FBUyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUE2QztJQUM5RSxPQUFPLFVBQVUsTUFBTSxFQUFFLFdBQVcsRUFBRSxVQUFVO1FBQzlDLElBQUksYUFBYSxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUE7UUFDdkQsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxzQkFBVSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUV4RSxJQUFJLFlBQVk7WUFBRSxhQUFhLEdBQUcsQ0FBQyxHQUFHLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQTtRQUV0RixPQUFPLE9BQU8sQ0FBQyxjQUFjLENBQUMsc0JBQVUsQ0FBQyxXQUFXLEVBQUUsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQzlFLENBQUMsQ0FBQTtBQUNILENBQUM7QUFFRCxTQUFnQixHQUFHLENBQUMsSUFBWTtJQUM5QixPQUFPLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsdUJBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO0FBQ3ZELENBQUM7QUFGRCxrQkFFQztBQUVELFNBQWdCLElBQUksQ0FBQyxJQUFZO0lBQy9CLE9BQU8sT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSx1QkFBVyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7QUFDeEQsQ0FBQztBQUZELG9CQUVDO0FBRUQsU0FBZ0IsR0FBRyxDQUFDLElBQVk7SUFDOUIsT0FBTyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLHVCQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTtBQUN2RCxDQUFDO0FBRkQsa0JBRUM7QUFFRCxTQUFnQixHQUFHLENBQUMsSUFBWTtJQUM5QixPQUFPLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsdUJBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO0FBQzFELENBQUM7QUFGRCxrQkFFQztBQUVELFNBQWdCLHVCQUF1QixDQUNyQyxNQUFXO0lBRVgsT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDLHNCQUFVLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFBO0FBQzVELENBQUM7QUFKRCwwREFJQyJ9