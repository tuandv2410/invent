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
exports.ProductOrderDto = void 0;
const nestjsx_automapper_1 = require("nestjsx-automapper");
const automapper_1 = require("@nartc/automapper");
const product_order_entity_1 = require("../../../../../entities/tenant/business/product-order.entity");
const class_validator_1 = require("class-validator");
class Order {
}
class Sku {
}
class ProductOrderDto {
}
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ProductOrderDto.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Order)
], ProductOrderDto.prototype, "order", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Sku)
], ProductOrderDto.prototype, "sku", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], ProductOrderDto.prototype, "quantity", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], ProductOrderDto.prototype, "totalPrice", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], ProductOrderDto.prototype, "discount", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ProductOrderDto.prototype, "currency", void 0);
exports.ProductOrderDto = ProductOrderDto;
automapper_1.Mapper.createMap(product_order_entity_1.ProductOrderEntity, ProductOrderDto)
    .forMember(d => d.order, automapper_1.mapFrom(s => s.order)).forMember(d => d.sku, automapper_1.mapFrom(s => s.sku));
//# sourceMappingURL=product-order.dto.js.map