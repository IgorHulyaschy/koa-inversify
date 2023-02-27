"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const module_factory_1 = require("../../module-factory");
const App_1 = require("./App");
const AppModule_1 = require("./AppModule");
function main() {
    const ioc = new module_factory_1.ModuleFactory(AppModule_1.AppModule.register({ port: 3000 }));
    const app = ioc.get(App_1.App);
    return app.start(ioc);
}
main();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvZXhhbXBsZS9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5REFBb0Q7QUFDcEQsK0JBQTJCO0FBQzNCLDJDQUF1QztBQUV2QyxTQUFTLElBQUk7SUFDWCxNQUFNLEdBQUcsR0FBRyxJQUFJLDhCQUFhLENBQUMscUJBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBRWpFLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBRyxDQUFDLENBQUE7SUFDeEIsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQ3ZCLENBQUM7QUFFRCxJQUFJLEVBQUUsQ0FBQSJ9