"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrderRepository = void 0;
const product_order_entity_1 = require("../../entities/business/product-order.entity");
const typeorm_1 = require("typeorm");
let ProductOrderRepository = class ProductOrderRepository extends typeorm_1.Repository {
};
ProductOrderRepository = __decorate([
    typeorm_1.EntityRepository(product_order_entity_1.ProductOrderEntity)
], ProductOrderRepository);
exports.ProductOrderRepository = ProductOrderRepository;
//# sourceMappingURL=product-order.repository.js.map