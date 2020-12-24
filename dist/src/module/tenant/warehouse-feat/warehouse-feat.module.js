"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseFeatModule = void 0;
const common_1 = require("@nestjs/common");
const warehouse_module_1 = require("./warehouse/warehouse.module");
const activity_area_module_1 = require("./activity-area/activity-area.module");
const storage_type_module_1 = require("./storage-type/storage-type.module");
const storage_section_module_1 = require("./storage-section/storage-section.module");
const storage_bin_module_1 = require("./storage-bin/storage-bin.module");
let WarehouseFeatModule = class WarehouseFeatModule {
};
WarehouseFeatModule = __decorate([
    common_1.Module({
        imports: [warehouse_module_1.WarehouseModule, activity_area_module_1.ActivityAreaModule, storage_type_module_1.StorageTypeModule, storage_section_module_1.StorageSectionModule, storage_bin_module_1.StorageBinModule]
    })
], WarehouseFeatModule);
exports.WarehouseFeatModule = WarehouseFeatModule;
//# sourceMappingURL=warehouse-feat.module.js.map