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
exports.SkuEntity = void 0;
const typeorm_1 = require("typeorm");
const nestjsx_automapper_1 = require("nestjsx-automapper");
const storage_bin_entity_1 = require("../warehouse-feat/storage-bin.entity");
const handling_unit_entity_1 = require("./handling-unit.entity");
const product_entity_1 = require("./product.entity");
const product_contract_entity_1 = require("../business/product-contract.entity");
const product_order_entity_1 = require("../business/product-order.entity");
let SkuEntity = class SkuEntity extends typeorm_1.BaseEntity {
};
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], SkuEntity.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], SkuEntity.prototype, "productName", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], SkuEntity.prototype, "productId", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], SkuEntity.prototype, "expireDate", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], SkuEntity.prototype, "unitPrice", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], SkuEntity.prototype, "currency", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], SkuEntity.prototype, "quantity", void 0);
__decorate([
    typeorm_1.ManyToOne(type => storage_bin_entity_1.StorageBinEntity, storageBin => storageBin.skus, {
        cascade: true
    }),
    __metadata("design:type", storage_bin_entity_1.StorageBinEntity)
], SkuEntity.prototype, "storageBin", void 0);
__decorate([
    typeorm_1.ManyToOne(type => handling_unit_entity_1.HandlingUnitEntity, handlingUnit => handlingUnit.skus, {
        cascade: true
    }),
    __metadata("design:type", handling_unit_entity_1.HandlingUnitEntity)
], SkuEntity.prototype, "handlingUnit", void 0);
__decorate([
    typeorm_1.ManyToOne(type => product_entity_1.ProductEntity, product => product.skus, {
        cascade: true
    }),
    __metadata("design:type", product_entity_1.ProductEntity)
], SkuEntity.prototype, "product", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => product_contract_entity_1.ProductContractEntity),
    typeorm_1.OneToMany(type => product_contract_entity_1.ProductContractEntity, productContract => productContract.sku),
    __metadata("design:type", Array)
], SkuEntity.prototype, "productContracts", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => product_order_entity_1.ProductOrderEntity),
    typeorm_1.OneToMany(type => product_order_entity_1.ProductOrderEntity, productOrder => productOrder.sku),
    __metadata("design:type", Array)
], SkuEntity.prototype, "productOrders", void 0);
SkuEntity = __decorate([
    typeorm_1.Entity('sku')
], SkuEntity);
exports.SkuEntity = SkuEntity;
//# sourceMappingURL=sku.entity.js.map