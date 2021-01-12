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
exports.SourcingBusinessContractEntity = void 0;
const typeorm_1 = require("typeorm");
const nestjsx_automapper_1 = require("nestjsx-automapper");
const business_partner_entity_1 = require("../inventory/business-partner.entity");
const product_sourcing_contract_entity_1 = require("./product-sourcing-contract.entity");
const sourcing_order_entity_1 = require("./sourcing-order.entity");
let SourcingBusinessContractEntity = class SourcingBusinessContractEntity extends typeorm_1.BaseEntity {
};
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], SourcingBusinessContractEntity.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], SourcingBusinessContractEntity.prototype, "createdDate", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", Number)
], SourcingBusinessContractEntity.prototype, "moneyValue", void 0);
__decorate([
    typeorm_1.ManyToOne(type => business_partner_entity_1.BusinessPartnerEntity, businessPartner => businessPartner.sourcingBusinessContracts, {
        cascade: true
    }),
    __metadata("design:type", business_partner_entity_1.BusinessPartnerEntity)
], SourcingBusinessContractEntity.prototype, "businessPartner", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => product_sourcing_contract_entity_1.ProductSourcingContractEntity),
    typeorm_1.OneToMany(type => product_sourcing_contract_entity_1.ProductSourcingContractEntity, productSourcingContract => productSourcingContract.sourcingBusinessContract),
    __metadata("design:type", Array)
], SourcingBusinessContractEntity.prototype, "productSourcingContracts", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => sourcing_order_entity_1.SourcingOrderEntity),
    typeorm_1.OneToMany(type => sourcing_order_entity_1.SourcingOrderEntity, sourcingOrder => sourcingOrder.sourcingBusinessContract),
    __metadata("design:type", Array)
], SourcingBusinessContractEntity.prototype, "sourcingOrders", void 0);
SourcingBusinessContractEntity = __decorate([
    typeorm_1.Entity('sourcing-business-contract')
], SourcingBusinessContractEntity);
exports.SourcingBusinessContractEntity = SourcingBusinessContractEntity;
//# sourceMappingURL=sourcing-business-contract.entity.js.map