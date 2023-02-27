"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleFactory = void 0;
const inversify_1 = require("inversify");
const decorators_1 = require("../decorators");
const koa_builder_1 = require("../koa-builder");
class ModuleFactory {
    constructor(appModule) {
        Object.defineProperty(this, "appModule", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: appModule
        });
        Object.defineProperty(this, "mainContainer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new inversify_1.Container()
        });
        Object.defineProperty(this, "globalWebControllers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        this.init();
    }
    defineControllers(ctor) {
        if (ctor.deps) {
            if (ctor.deps.webControllers) {
                ctor.deps.webControllers.forEach((controller) => {
                    this.mainContainer.bind(controller).toSelf().inSingletonScope();
                    this.globalWebControllers.push(controller);
                });
            }
            ctor.deps.init(this.mainContainer);
        }
    }
    init() {
        this.mainContainer.bind(koa_builder_1.KoaApplication).toSelf().inSingletonScope();
        const { imports, deps } = this.appModule;
        if (imports) {
            imports.forEach((module) => {
                const moduleMetadata = (0, decorators_1.getModuleMetadata)(module);
                if (!moduleMetadata && 'deps' in module)
                    return this.defineControllers(module);
                return this.defineControllers(moduleMetadata);
            });
        }
        if (deps) {
            deps.init(this.mainContainer);
        }
    }
    get(servicesIdentifier) {
        return this.mainContainer.get(servicesIdentifier);
    }
    getContainer() {
        return this.mainContainer;
    }
}
exports.ModuleFactory = ModuleFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kdWxlRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9tb2R1bGUtZmFjdG9yeS9Nb2R1bGVGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUFpRDtBQUVqRCw4Q0FBaUQ7QUFDakQsZ0RBQStDO0FBRy9DLE1BQWEsYUFBYTtJQUd4QixZQUE2QixTQUFpQjs7Ozs7bUJBQWpCOztRQUY3Qjs7OzttQkFBZ0IsSUFBSSxxQkFBUyxFQUFFO1dBQUE7UUFDL0I7Ozs7bUJBQTBDLEVBQUU7V0FBQTtRQUUxQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDYixDQUFDO0lBRU8saUJBQWlCLENBQUMsSUFBWTtRQUNwQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRTtvQkFDOUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtvQkFDL0QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtnQkFDNUMsQ0FBQyxDQUFDLENBQUE7YUFDSDtZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtTQUNuQztJQUNILENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsNEJBQWMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUE7UUFFbkUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFBO1FBQ3hDLElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUN6QixNQUFNLGNBQWMsR0FBRyxJQUFBLDhCQUFpQixFQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUNoRCxJQUFJLENBQUMsY0FBYyxJQUFJLE1BQU0sSUFBSSxNQUFNO29CQUFFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUU5RSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQTtZQUMvQyxDQUFDLENBQUMsQ0FBQTtTQUNIO1FBRUQsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtTQUM5QjtJQUNILENBQUM7SUFFRCxHQUFHLENBQUksa0JBQW1EO1FBQ3hELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtJQUNuRCxDQUFDO0lBRUQsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQTtJQUMzQixDQUFDO0NBQ0Y7QUE1Q0Qsc0NBNENDIn0=