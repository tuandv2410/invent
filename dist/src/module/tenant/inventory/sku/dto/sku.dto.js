"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkuDto = void 0;
const nestjsx_automapper_1 = require("nestjsx-automapper");
const automapper_1 = require("@nartc/automapper");
const sku_entity_1 = require("../../../../../entities/tenant/inventory/sku.entity");
const class_validator_1 = require("class-validator");
const product_sourcing_contract_entity_1 = require("../../../../../entities/tenant/sourcing/product-sourcing-contract.entity");
const product_sourcing_order_entity_1 = require("../../../../../entities/tenant/sourcing/product-sourcing-order.entity");
class ProductSourcingContract {
}
automapper_1.Mapper.createMap(product_sourcing_contract_entity_1.ProductSourcingContractEntity, ProductSourcingContract);
class ProductSourcingOrder {
}
automapper_1.Mapper.createMap(product_sourcing_order_entity_1.ProductSourcingOrderEntity, ProductSourcingOrder);
class SkuDto {
}
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], SkuDto.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], SkuDto.prototype, "productName", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], SkuDto.prototype, "productId", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], SkuDto.prototype, "expireDate", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], SkuDto.prototype, "unitPrice", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], SkuDto.prototype, "currency", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], SkuDto.prototype, "quantity", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => ProductSourcingContract),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], SkuDto.prototype, "productSourcingContracts", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], SkuDto.prototype, "productSourcingOrders", void 0);
exports.SkuDto = SkuDto;
automapper_1.Mapper.createMap(sku_entity_1.SkuEntity, SkuDto);
//# sourceMappingURL=sku.dto.js.map