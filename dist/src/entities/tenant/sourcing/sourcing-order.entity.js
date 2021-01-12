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
exports.SourcingOrderEntity = void 0;
const typeorm_1 = require("typeorm");
const nestjsx_automapper_1 = require("nestjsx-automapper");
const sourcing_business_contract_entity_1 = require("./sourcing-business-contract.entity");
const product_sourcing_order_entity_1 = require("./product-sourcing-order.entity");
const sourcing_shipment_entity_1 = require("./sourcing-shipment.entity");
const sourcing_payment_entity_1 = require("./sourcing-payment.entity");
let SourcingOrderEntity = class SourcingOrderEntity extends typeorm_1.BaseEntity {
};
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], SourcingOrderEntity.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], SourcingOrderEntity.prototype, "createdDate", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: true,
    }),
    __metadata("design:type", String)
], SourcingOrderEntity.prototype, "addingServiceId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => sourcing_business_contract_entity_1.SourcingBusinessContractEntity, sourcingBusinessContract => sourcingBusinessContract.sourcingOrders, {
        cascade: true
    }),
    __metadata("design:type", sourcing_business_contract_entity_1.SourcingBusinessContractEntity)
], SourcingOrderEntity.prototype, "sourcingBusinessContract", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => product_sourcing_order_entity_1.ProductSourcingOrderEntity),
    typeorm_1.OneToMany(type => product_sourcing_order_entity_1.ProductSourcingOrderEntity, productSourcingOrder => productSourcingOrder.sourcingOrder),
    __metadata("design:type", Array)
], SourcingOrderEntity.prototype, "productSourcingOrders", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => sourcing_shipment_entity_1.SourcingShipmentEntity),
    typeorm_1.OneToOne(type => sourcing_shipment_entity_1.SourcingShipmentEntity, sourcingShipment => sourcingShipment.sourcingOrder),
    __metadata("design:type", sourcing_shipment_entity_1.SourcingShipmentEntity)
], SourcingOrderEntity.prototype, "sourcingShipment", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => sourcing_payment_entity_1.SourcingPaymentEntity),
    typeorm_1.OneToMany(type => sourcing_payment_entity_1.SourcingPaymentEntity, sourcingpayment => sourcingpayment.sourcingOrder),
    __metadata("design:type", Array)
], SourcingOrderEntity.prototype, "sourcingpayments", void 0);
SourcingOrderEntity = __decorate([
    typeorm_1.Entity('sourcing-order')
], SourcingOrderEntity);
exports.SourcingOrderEntity = SourcingOrderEntity;
//# sourceMappingURL=sourcing-order.entity.js.map