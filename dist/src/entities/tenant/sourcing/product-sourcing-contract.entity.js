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
exports.ProductSourcingContractEntity = void 0;
const typeorm_1 = require("typeorm");
const nestjsx_automapper_1 = require("nestjsx-automapper");
const sku_entity_1 = require("../inventory/sku.entity");
const sourcing_business_contract_entity_1 = require("./sourcing-business-contract.entity");
let ProductSourcingContractEntity = class ProductSourcingContractEntity extends typeorm_1.BaseEntity {
};
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], ProductSourcingContractEntity.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProductSourcingContractEntity.prototype, "quantity", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProductSourcingContractEntity.prototype, "totalPricr", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProductSourcingContractEntity.prototype, "discount", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], ProductSourcingContractEntity.prototype, "currency", void 0);
__decorate([
    typeorm_1.ManyToOne(type => sku_entity_1.SkuEntity, sku => sku.productSourcingContracts, {
        cascade: true
    }),
    __metadata("design:type", sku_entity_1.SkuEntity)
], ProductSourcingContractEntity.prototype, "sku", void 0);
__decorate([
    typeorm_1.ManyToOne(type => sourcing_business_contract_entity_1.SourcingBusinessContractEntity, sourcingBusinessContract => sourcingBusinessContract.productSourcingContracts, {
        cascade: true
    }),
    __metadata("design:type", sourcing_business_contract_entity_1.SourcingBusinessContractEntity)
], ProductSourcingContractEntity.prototype, "sourcingBusinessContract", void 0);
ProductSourcingContractEntity = __decorate([
    typeorm_1.Entity('product-sourcing-contract')
], ProductSourcingContractEntity);
exports.ProductSourcingContractEntity = ProductSourcingContractEntity;
//# sourceMappingURL=product-sourcing-contract.entity.js.map