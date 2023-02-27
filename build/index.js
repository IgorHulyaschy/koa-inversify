"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.module = exports.useMiddleware = exports.middleware = exports.webController = exports.put = exports.del = exports.post = exports.get = exports.ModuleFactory = exports.KoaApplication = void 0;
const koa_builder_1 = require("./koa-builder");
Object.defineProperty(exports, "KoaApplication", { enumerable: true, get: function () { return koa_builder_1.KoaApplication; } });
const decorators_1 = require("./decorators");
Object.defineProperty(exports, "get", { enumerable: true, get: function () { return decorators_1.get; } });
Object.defineProperty(exports, "post", { enumerable: true, get: function () { return decorators_1.post; } });
Object.defineProperty(exports, "del", { enumerable: true, get: function () { return decorators_1.del; } });
Object.defineProperty(exports, "put", { enumerable: true, get: function () { return decorators_1.put; } });
Object.defineProperty(exports, "webController", { enumerable: true, get: function () { return decorators_1.webController; } });
Object.defineProperty(exports, "middleware", { enumerable: true, get: function () { return decorators_1.middleware; } });
Object.defineProperty(exports, "useMiddleware", { enumerable: true, get: function () { return decorators_1.useMiddleware; } });
Object.defineProperty(exports, "module", { enumerable: true, get: function () { return decorators_1.module; } });
const module_factory_1 = require("./module-factory");
Object.defineProperty(exports, "ModuleFactory", { enumerable: true, get: function () { return module_factory_1.ModuleFactory; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0NBQThDO0FBTTVDLCtGQU5PLDRCQUFjLE9BTVA7QUFKaEIsNkNBQW9HO0FBU2xHLG9GQVRPLGdCQUFHLE9BU1A7QUFDSCxxRkFWWSxpQkFBSSxPQVVaO0FBQ0osb0ZBWGtCLGdCQUFHLE9BV2xCO0FBQ0gsb0ZBWnVCLGdCQUFHLE9BWXZCO0FBQ0gsOEZBYjRCLDBCQUFhLE9BYTVCO0FBQ2IsMkZBZDJDLHVCQUFVLE9BYzNDO0FBQ1YsOEZBZnVELDBCQUFhLE9BZXZEO0FBQ2IsdUZBaEJzRSxtQkFBTSxPQWdCdEU7QUFmUixxREFBZ0Q7QUFJOUMsOEZBSk8sOEJBQWEsT0FJUCJ9