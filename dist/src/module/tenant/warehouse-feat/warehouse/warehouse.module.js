"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseModule = void 0;
const common_1 = require("@nestjs/common");
const warehouse_controller_1 = require("./warehouse.controller");
const warehouse_repository_1 = require("./warehouse.repository");
const warehouse_service_1 = require("./warehouse.service");
let WarehouseModule = class WarehouseModule {
};
WarehouseModule = __decorate([
    common_1.Module({
        controllers: [warehouse_controller_1.WarehouseController],
        providers: [warehouse_service_1.WarehouseService, warehouse_repository_1.WarehouseRepository]
    })
], WarehouseModule);
exports.WarehouseModule = WarehouseModule;
//# sourceMappingURL=warehouse.module.js.map