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
exports.ProductContractEntity = void 0;
const typeorm_1 = require("typeorm");
const nestjsx_automapper_1 = require("nestjsx-automapper");
const business_contract_entity_1 = require("./business-contract.entity");
const sku_entity_1 = require("../inventory/sku.entity");
let ProductContractEntity = class ProductContractEntity extends typeorm_1.BaseEntity {
};
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], ProductContractEntity.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ProductContractEntity.prototype, "quantity", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ProductContractEntity.prototype, "totalPrice", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ProductContractEntity.prototype, "discount", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], ProductContractEntity.prototype, "currency", void 0);
__decorate([
    typeorm_1.ManyToOne(type => business_contract_entity_1.BusinessContractEntity, businessContract => businessContract.productContracts, {
        cascade: true
    }),
    __metadata("design:type", business_contract_entity_1.BusinessContractEntity)
], ProductContractEntity.prototype, "businessContract", void 0);
__decorate([
    typeorm_1.ManyToOne(type => sku_entity_1.SkuEntity, sku => sku.productContracts, {
        cascade: true
    }),
    __metadata("design:type", sku_entity_1.SkuEntity)
], ProductContractEntity.prototype, "sku", void 0);
ProductContractEntity = __decorate([
    typeorm_1.Entity('product-contract')
], ProductContractEntity);
exports.ProductContractEntity = ProductContractEntity;
//# sourceMappingURL=product-contract.entity.js.map