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
exports.ProductSellingOrderEntity = void 0;
const typeorm_1 = require("typeorm");
const nestjsx_automapper_1 = require("nestjsx-automapper");
const sku_entity_1 = require("../inventory/sku.entity");
const selling_order_entity_1 = require("./selling-order.entity");
let ProductSellingOrderEntity = class ProductSellingOrderEntity extends typeorm_1.BaseEntity {
};
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], ProductSellingOrderEntity.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProductSellingOrderEntity.prototype, "quantity", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProductSellingOrderEntity.prototype, "totalPrice", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", Number)
], ProductSellingOrderEntity.prototype, "discount", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], ProductSellingOrderEntity.prototype, "currency", void 0);
__decorate([
    typeorm_1.ManyToOne(type => sku_entity_1.SkuEntity, sku => sku.productSellingOrders, {
        cascade: true
    }),
    __metadata("design:type", sku_entity_1.SkuEntity)
], ProductSellingOrderEntity.prototype, "sku", void 0);
__decorate([
    typeorm_1.ManyToOne(type => selling_order_entity_1.SellingOrderEntity, sellingOrder => sellingOrder.productSellingOrders, {
        cascade: true
    }),
    __metadata("design:type", selling_order_entity_1.SellingOrderEntity)
], ProductSellingOrderEntity.prototype, "sellingOrder", void 0);
ProductSellingOrderEntity = __decorate([
    typeorm_1.Entity('product-selling-order')
], ProductSellingOrderEntity);
exports.ProductSellingOrderEntity = ProductSellingOrderEntity;
//# sourceMappingURL=product-selling-order.entity.js.map