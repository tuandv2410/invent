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
exports.BusinessContractEntity = void 0;
const typeorm_1 = require("typeorm");
const nestjsx_automapper_1 = require("nestjsx-automapper");
const business_partner_entity_1 = require("../inventory/business-partner.entity");
const order_entity_1 = require("./order.entity");
const product_contract_entity_1 = require("./product-contract.entity");
let BusinessContractEntity = class BusinessContractEntity extends typeorm_1.BaseEntity {
};
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], BusinessContractEntity.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], BusinessContractEntity.prototype, "createDate", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", Number)
], BusinessContractEntity.prototype, "moneyValue", void 0);
__decorate([
    typeorm_1.ManyToOne(type => business_partner_entity_1.BusinessPartnerEntity, businessPartner => businessPartner.businessContracts, {
        cascade: true
    }),
    __metadata("design:type", business_partner_entity_1.BusinessPartnerEntity)
], BusinessContractEntity.prototype, "businessPartner", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => order_entity_1.OrderEntity),
    typeorm_1.OneToMany(type => order_entity_1.OrderEntity, order => order.businessContract),
    __metadata("design:type", Array)
], BusinessContractEntity.prototype, "orders", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => product_contract_entity_1.ProductContractEntity),
    typeorm_1.OneToMany(type => product_contract_entity_1.ProductContractEntity, productContract => productContract.businessContract),
    __metadata("design:type", Array)
], BusinessContractEntity.prototype, "productContracts", void 0);
BusinessContractEntity = __decorate([
    typeorm_1.Entity('business-contract')
], BusinessContractEntity);
exports.BusinessContractEntity = BusinessContractEntity;
//# sourceMappingURL=business-contract.entity.js.map