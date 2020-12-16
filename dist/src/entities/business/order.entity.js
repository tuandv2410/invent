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
exports.OrderEntity = void 0;
const typeorm_1 = require("typeorm");
const nestjsx_automapper_1 = require("nestjsx-automapper");
const adding_service_entity_1 = require("./adding-service.entity");
const business_contract_entity_1 = require("./business-contract.entity");
const payment_entity_1 = require("./payment.entity");
const shipment_entity_1 = require("./shipment.entity");
const product_order_entity_1 = require("./product-order.entity");
let OrderEntity = class OrderEntity extends typeorm_1.BaseEntity {
};
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], OrderEntity.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], OrderEntity.prototype, "createDate", void 0);
__decorate([
    typeorm_1.ManyToOne(type => business_contract_entity_1.BusinessContractEntity, businessContract => businessContract.orders, {
        cascade: true
    }),
    __metadata("design:type", business_contract_entity_1.BusinessContractEntity)
], OrderEntity.prototype, "businessContract", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => payment_entity_1.PaymentEntity),
    typeorm_1.OneToMany(type => payment_entity_1.PaymentEntity, payment => payment.order),
    __metadata("design:type", Array)
], OrderEntity.prototype, "payments", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => shipment_entity_1.ShipmentEntity),
    typeorm_1.OneToOne(type => shipment_entity_1.ShipmentEntity, shipment => shipment.order),
    __metadata("design:type", shipment_entity_1.ShipmentEntity)
], OrderEntity.prototype, "shipment", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => product_order_entity_1.ProductOrderEntity),
    typeorm_1.OneToMany(type => product_order_entity_1.ProductOrderEntity, productOrder => productOrder.order),
    __metadata("design:type", Array)
], OrderEntity.prototype, "productOrders", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => adding_service_entity_1.AddingServiceEntity),
    typeorm_1.ManyToOne(type => adding_service_entity_1.AddingServiceEntity, addingService => addingService.orders, {
        cascade: true
    }),
    __metadata("design:type", adding_service_entity_1.AddingServiceEntity)
], OrderEntity.prototype, "addingService", void 0);
OrderEntity = __decorate([
    typeorm_1.Entity('order')
], OrderEntity);
exports.OrderEntity = OrderEntity;
//# sourceMappingURL=order.entity.js.map