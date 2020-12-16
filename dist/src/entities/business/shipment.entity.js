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
exports.ShipmentEntity = void 0;
const typeorm_1 = require("typeorm");
const nestjsx_automapper_1 = require("nestjsx-automapper");
const shipment_status_enum_1 = require("../../business/enum/shipment-status.enum");
const order_entity_1 = require("./order.entity");
let ShipmentEntity = class ShipmentEntity extends typeorm_1.BaseEntity {
};
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], ShipmentEntity.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", Number)
], ShipmentEntity.prototype, "value", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], ShipmentEntity.prototype, "status", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], ShipmentEntity.prototype, "deliveryDate", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => order_entity_1.OrderEntity),
    typeorm_1.OneToOne(type => order_entity_1.OrderEntity, order => order.shipment, {
        cascade: true
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", order_entity_1.OrderEntity)
], ShipmentEntity.prototype, "order", void 0);
ShipmentEntity = __decorate([
    typeorm_1.Entity('shipment')
], ShipmentEntity);
exports.ShipmentEntity = ShipmentEntity;
//# sourceMappingURL=shipment.entity.js.map