"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationBuilder = void 0;
const router_1 = __importDefault(require("@koa/router"));
const decorators_1 = require("../decorators");
class ApplicationBuilder {
    buildHttpControllers(ioc) {
        return ioc.globalWebControllers.map((ctor) => {
            const router = new router_1.default();
            const controller = ioc.get(ctor);
            const controllerMetadata = (0, decorators_1.getWebControllersMetadata)(ctor);
            const handlersMetadata = (0, decorators_1.getHttpHandlersMetadata)(controller);
            const middlewaresMetadata = (0, decorators_1.getMiddlewaresMetadata)(controller);
            for (const metadata of handlersMetadata) {
                const middlewares = middlewaresMetadata
                    ? middlewaresMetadata.filter(({ handlerName }) => metadata.handlerName === handlerName)
                    : null;
                if (!middlewares?.length) {
                    router[metadata.httpMethod](controllerMetadata + metadata.path, controller[metadata.handlerName].bind(controller));
                    continue;
                }
                const [middeware, ...otherMiddlewares] = middlewares.map(({ constructor }) => {
                    const middleware = ioc.get(constructor);
                    return middleware.use.bind(middleware);
                });
                router[metadata.httpMethod](controllerMetadata + metadata.path, middeware, ...otherMiddlewares, controller[metadata.handlerName].bind(controller));
            }
            return router;
        });
    }
}
exports.ApplicationBuilder = ApplicationBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGljYXRpb25CdWlsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2tvYS1idWlsZGVyL0FwcGxpY2F0aW9uQnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx5REFBZ0M7QUFFaEMsOENBSXNCO0FBSXRCLE1BQWEsa0JBQWtCO0lBQzdCLG9CQUFvQixDQUFDLEdBQWtCO1FBQ3JDLE9BQU8sR0FBRyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzNDLE1BQU0sTUFBTSxHQUFHLElBQUksZ0JBQU0sRUFBRSxDQUFBO1lBQzNCLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFFaEMsTUFBTSxrQkFBa0IsR0FBRyxJQUFBLHNDQUF5QixFQUFDLElBQUksQ0FBQyxDQUFBO1lBQzFELE1BQU0sZ0JBQWdCLEdBQUcsSUFBQSxvQ0FBdUIsRUFBQyxVQUFVLENBQUMsQ0FBQTtZQUM1RCxNQUFNLG1CQUFtQixHQUFHLElBQUEsbUNBQXNCLEVBQUMsVUFBVSxDQUFDLENBQUE7WUFFOUQsS0FBSyxNQUFNLFFBQVEsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDdkMsTUFBTSxXQUFXLEdBQUcsbUJBQW1CO29CQUNyQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsS0FBSyxXQUFXLENBQUM7b0JBQ3ZGLENBQUMsQ0FBQyxJQUFJLENBQUE7Z0JBRVIsSUFBSSxDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUU7b0JBQ3hCLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQ3pCLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQ2xDLFVBQVUsQ0FBQyxRQUFRLENBQUMsV0FBc0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FDN0UsQ0FBQTtvQkFDRCxTQUFRO2lCQUNUO2dCQUVELE1BQU0sQ0FBQyxTQUFTLEVBQUUsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUU7b0JBQzNFLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQWEsV0FBVyxDQUFDLENBQUE7b0JBQ25ELE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7Z0JBQ3hDLENBQUMsQ0FBQyxDQUFBO2dCQUVGLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQ3pCLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQ2xDLFNBQVMsRUFDVCxHQUFHLGdCQUFnQixFQUNuQixVQUFVLENBQUMsUUFBUSxDQUFDLFdBQXNDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQzdFLENBQUE7YUFDRjtZQUVELE9BQU8sTUFBTSxDQUFBO1FBQ2YsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0Y7QUF2Q0QsZ0RBdUNDIn0=