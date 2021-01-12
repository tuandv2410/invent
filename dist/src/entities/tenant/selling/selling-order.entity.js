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
exports.SellingOrderEntity = void 0;
const typeorm_1 = require("typeorm");
const selling_business_contract_entity_1 = require("./selling-business-contract.entity");
const product_selling_order_entity_1 = require("./product-selling-order.entity");
const selling_shipment_entity_1 = require("./selling-shipment.entity");
const selling_payment_entity_1 = require("./selling-payment.entity");
let SellingOrderEntity = class SellingOrderEntity extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], SellingOrderEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], SellingOrderEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
    }),
    __metadata("design:type", Number)
], SellingOrderEntity.prototype, "value", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
    }),
    __metadata("design:type", String)
], SellingOrderEntity.prototype, "addingServiceType", void 0);
__decorate([
    typeorm_1.ManyToOne(type => selling_business_contract_entity_1.SellingBusinessContractEntity, sellingBusinessContract => sellingBusinessContract.sellingOrders, {
        cascade: true
    }),
    __metadata("design:type", selling_business_contract_entity_1.SellingBusinessContractEntity)
], SellingOrderEntity.prototype, "sellingBusinessContract", void 0);
__decorate([
    typeorm_1.OneToMany(type => product_selling_order_entity_1.ProductSellingOrderEntity, productSellingOrder => productSellingOrder.sellingOrder),
    __metadata("design:type", Array)
], SellingOrderEntity.prototype, "productSellingOrders", void 0);
__decorate([
    typeorm_1.OneToOne(type => selling_shipment_entity_1.SellingShipmentEntity, sellingShipment => sellingShipment.sellingOrder),
    __metadata("design:type", selling_shipment_entity_1.SellingShipmentEntity)
], SellingOrderEntity.prototype, "sellingShipment", void 0);
__decorate([
    typeorm_1.OneToMany(type => selling_payment_entity_1.SellingPaymentEntity, sellingpayment => sellingpayment.sellingOrder),
    __metadata("design:type", Array)
], SellingOrderEntity.prototype, "sellingpayments", void 0);
SellingOrderEntity = __decorate([
    typeorm_1.Entity('selling-order')
], SellingOrderEntity);
exports.SellingOrderEntity = SellingOrderEntity;
//# sourceMappingURL=selling-order.entity.js.map