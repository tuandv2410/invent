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
exports.ProductSourcingOrderEntity = void 0;
const typeorm_1 = require("typeorm");
const nestjsx_automapper_1 = require("nestjsx-automapper");
const sku_entity_1 = require("../inventory/sku.entity");
const sourcing_order_entity_1 = require("./sourcing-order.entity");
let ProductSourcingOrderEntity = class ProductSourcingOrderEntity extends typeorm_1.BaseEntity {
};
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], ProductSourcingOrderEntity.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProductSourcingOrderEntity.prototype, "quantity", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProductSourcingOrderEntity.prototype, "totalPricr", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProductSourcingOrderEntity.prototype, "discount", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], ProductSourcingOrderEntity.prototype, "currency", void 0);
__decorate([
    typeorm_1.ManyToOne(type => sku_entity_1.SkuEntity, sku => sku.productSourcingOrders, {
        cascade: true
    }),
    __metadata("design:type", sku_entity_1.SkuEntity)
], ProductSourcingOrderEntity.prototype, "sku", void 0);
__decorate([
    typeorm_1.ManyToOne(type => sourcing_order_entity_1.SourcingOrderEntity, sourcingOrder => sourcingOrder.productSourcingOrders, {
        cascade: true
    }),
    __metadata("design:type", sourcing_order_entity_1.SourcingOrderEntity)
], ProductSourcingOrderEntity.prototype, "sourcingOrder", void 0);
ProductSourcingOrderEntity = __decorate([
    typeorm_1.Entity('product-sourcing-order')
], ProductSourcingOrderEntity);
exports.ProductSourcingOrderEntity = ProductSourcingOrderEntity;
//# sourceMappingURL=product-sourcing-order.entity.js.map