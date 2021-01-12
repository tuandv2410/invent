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
exports.SourcingShipmentEntity = void 0;
const typeorm_1 = require("typeorm");
const nestjsx_automapper_1 = require("nestjsx-automapper");
const shipment_status_enum_1 = require("../../../enum/shipment-status.enum");
const sourcing_order_entity_1 = require("./sourcing-order.entity");
let SourcingShipmentEntity = class SourcingShipmentEntity extends typeorm_1.BaseEntity {
};
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], SourcingShipmentEntity.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], SourcingShipmentEntity.prototype, "receivedDate", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], SourcingShipmentEntity.prototype, "status", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", Number)
], SourcingShipmentEntity.prototype, "fee_value", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], SourcingShipmentEntity.prototype, "currency", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => sourcing_order_entity_1.SourcingOrderEntity),
    typeorm_1.OneToOne(type => sourcing_order_entity_1.SourcingOrderEntity, sourcingOrder => sourcingOrder.sourcingShipment, {
        cascade: true
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", sourcing_order_entity_1.SourcingOrderEntity)
], SourcingShipmentEntity.prototype, "sourcingOrder", void 0);
SourcingShipmentEntity = __decorate([
    typeorm_1.Entity('sourcing-shipment')
], SourcingShipmentEntity);
exports.SourcingShipmentEntity = SourcingShipmentEntity;
//# sourceMappingURL=sourcing-shipment.entity.js.map