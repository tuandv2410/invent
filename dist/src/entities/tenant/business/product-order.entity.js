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
exports.ProductOrderEntity = void 0;
const typeorm_1 = require("typeorm");
const nestjsx_automapper_1 = require("nestjsx-automapper");
const order_entity_1 = require("./order.entity");
const sku_entity_1 = require("../inventory/sku.entity");
let ProductOrderEntity = class ProductOrderEntity extends typeorm_1.BaseEntity {
};
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], ProductOrderEntity.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProductOrderEntity.prototype, "quantity", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProductOrderEntity.prototype, "totalPrice", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProductOrderEntity.prototype, "discount", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], ProductOrderEntity.prototype, "currency", void 0);
__decorate([
    typeorm_1.ManyToOne(type => order_entity_1.OrderEntity, order => order.productOrders, {
        cascade: true
    }),
    __metadata("design:type", order_entity_1.OrderEntity)
], ProductOrderEntity.prototype, "order", void 0);
__decorate([
    typeorm_1.ManyToOne(type => sku_entity_1.SkuEntity, sku => sku.productOrders, {
        cascade: true
    }),
    __metadata("design:type", sku_entity_1.SkuEntity)
], ProductOrderEntity.prototype, "sku", void 0);
ProductOrderEntity = __decorate([
    typeorm_1.Entity('product-order')
], ProductOrderEntity);
exports.ProductOrderEntity = ProductOrderEntity;
//# sourceMappingURL=product-order.entity.js.map