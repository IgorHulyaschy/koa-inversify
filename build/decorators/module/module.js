"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getModuleMetadata = exports.module = void 0;
require("reflect-metadata");
const smb = Symbol('module');
function module(module) {
    return function (constructor) {
        if (!module)
            return;
        return Reflect.defineMetadata(smb, module, constructor);
    };
}
exports.module = module;
function getModuleMetadata(target) {
    return Reflect.getMetadata(smb, target);
}
exports.getModuleMetadata = getModuleMetadata;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL2RlY29yYXRvcnMvbW9kdWxlL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw0QkFBeUI7QUFJekIsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBRTVCLFNBQWdCLE1BQU0sQ0FBQyxNQU10QjtJQUNDLE9BQU8sVUFBVSxXQUFXO1FBQzFCLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTTtRQUNuQixPQUFPLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQTtJQUN6RCxDQUFDLENBQUE7QUFDSCxDQUFDO0FBWEQsd0JBV0M7QUFFRCxTQUFnQixpQkFBaUIsQ0FBQyxNQUFXO0lBTzNDLE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUE7QUFDekMsQ0FBQztBQVJELDhDQVFDIn0=