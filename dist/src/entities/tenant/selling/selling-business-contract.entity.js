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
exports.SellingBusinessContractEntity = void 0;
const typeorm_1 = require("typeorm");
const business_partner_entity_1 = require("../inventory/business-partner.entity");
const product_selling_contract_entity_1 = require("./product-selling-contract.entity");
const selling_order_entity_1 = require("./selling-order.entity");
const commission_entity_1 = require("./commission.entity");
let SellingBusinessContractEntity = class SellingBusinessContractEntity extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], SellingBusinessContractEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], SellingBusinessContractEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", Number)
], SellingBusinessContractEntity.prototype, "moneyValue", void 0);
__decorate([
    typeorm_1.ManyToOne(type => business_partner_entity_1.BusinessPartnerEntity, businessPartner => businessPartner.sellingBusinessContracts, {
        cascade: true
    }),
    __metadata("design:type", business_partner_entity_1.BusinessPartnerEntity)
], SellingBusinessContractEntity.prototype, "businessPartner", void 0);
__decorate([
    typeorm_1.OneToMany(type => product_selling_contract_entity_1.ProductSellingContractEntity, productSellingContract => productSellingContract.sellingBusinessContract),
    __metadata("design:type", Array)
], SellingBusinessContractEntity.prototype, "productSellingContracts", void 0);
__decorate([
    typeorm_1.OneToMany(type => selling_order_entity_1.SellingOrderEntity, sellingOrder => sellingOrder.sellingBusinessContract),
    __metadata("design:type", Array)
], SellingBusinessContractEntity.prototype, "sellingOrders", void 0);
__decorate([
    typeorm_1.OneToOne(type => commission_entity_1.CommissionEntity, commission => commission.sellingBusinessContract),
    __metadata("design:type", commission_entity_1.CommissionEntity)
], SellingBusinessContractEntity.prototype, "commission", void 0);
SellingBusinessContractEntity = __decorate([
    typeorm_1.Entity('selling-business-contract')
], SellingBusinessContractEntity);
exports.SellingBusinessContractEntity = SellingBusinessContractEntity;
//# sourceMappingURL=selling-business-contract.entity.js.map