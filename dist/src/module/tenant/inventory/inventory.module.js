"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryModule = void 0;
const common_1 = require("@nestjs/common");
const business_partner_module_1 = require("./business-partner/business-partner.module");
const handling_unit_module_1 = require("./handling-unit/handling-unit.module");
const package_specification_module_1 = require("./package-specification/package-specification.module");
const packging_material_module_1 = require("./packging-material/packging-material.module");
const product_module_1 = require("./product/product.module");
const sku_module_1 = require("./sku/sku.module");
let InventoryModule = class InventoryModule {
};
InventoryModule = __decorate([
    common_1.Module({
        imports: [handling_unit_module_1.HandlingUnitModule, package_specification_module_1.PackageSpecificationModule, packging_material_module_1.PackgingMaterialModule, product_module_1.ProductModule, sku_module_1.SkuModule, business_partner_module_1.BusinessPartnerModule]
    })
], InventoryModule);
exports.InventoryModule = InventoryModule;
//# sourceMappingURL=inventory.module.js.map