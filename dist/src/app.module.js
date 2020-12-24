"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjsx_automapper_1 = require("nestjsx-automapper");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const authentication_module_1 = require("./module/public/authentication/authentication.module");
const typeorm_config_1 = require("./config/typeorm.config");
const business_module_1 = require("./module/tenant/business/business.module");
const warehouse_feat_module_1 = require("./module/tenant/warehouse-feat/warehouse-feat.module");
const inventory_module_1 = require("./module/tenant/inventory/inventory.module");
const selling_and_sourcing_module_1 = require("./module/tenant/selling-and-sourcing/selling-and-sourcing.module");
const logger_middleware_1 = require("./middleware/logger.middleware");
const cash_flow_module_1 = require("./module/tenant/cash-flow/cash-flow.module");
const search_module_1 = require("./search/search.module");
const tenant_module_1 = require("./module/tenant/tenant.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(logger_middleware_1.LoggerMiddleware)
            .forRoutes('/');
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            nestjsx_automapper_1.AutomapperModule.withMapper(),
            typeorm_1.TypeOrmModule.forRoot(typeorm_config_1.typeOrmConfig),
            authentication_module_1.AuthenticationModule,
            business_module_1.BusinessModule,
            warehouse_feat_module_1.WarehouseFeatModule,
            inventory_module_1.InventoryModule,
            selling_and_sourcing_module_1.SellingAndSourcingModule,
            cash_flow_module_1.CashFlowModule,
            search_module_1.SearchModule,
            tenant_module_1.TenantModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map