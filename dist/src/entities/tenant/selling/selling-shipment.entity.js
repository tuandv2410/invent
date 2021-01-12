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
exports.SellingShipmentEntity = void 0;
const typeorm_1 = require("typeorm");
const shipment_status_enum_1 = require("../../../enum/shipment-status.enum");
const selling_order_entity_1 = require("./selling-order.entity");
let SellingShipmentEntity = class SellingShipmentEntity extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], SellingShipmentEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], SellingShipmentEntity.prototype, "deliveryDate", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], SellingShipmentEntity.prototype, "status", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", Number)
], SellingShipmentEntity.prototype, "fee_value", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], SellingShipmentEntity.prototype, "currency", void 0);
__decorate([
    typeorm_1.OneToOne(type => selling_order_entity_1.SellingOrderEntity, sellingOrder => sellingOrder.sellingShipment, {
        cascade: true
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", selling_order_entity_1.SellingOrderEntity)
], SellingShipmentEntity.prototype, "sellingOrder", void 0);
SellingShipmentEntity = __decorate([
    typeorm_1.Entity('selling-shipment')
], SellingShipmentEntity);
exports.SellingShipmentEntity = SellingShipmentEntity;
//# sourceMappingURL=selling-shipment.entity.js.map