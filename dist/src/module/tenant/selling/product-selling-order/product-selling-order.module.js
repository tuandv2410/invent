"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSellingOrderModule = void 0;
const common_1 = require("@nestjs/common");
const product_selling_order_controller_1 = require("./product-selling-order.controller");
const product_selling_order_service_1 = require("./product-selling-order.service");
let ProductSellingOrderModule = class ProductSellingOrderModule {
};
ProductSellingOrderModule = __decorate([
    common_1.Module({
        controllers: [product_selling_order_controller_1.ProductSellingOrderController],
        providers: [product_selling_order_service_1.ProductSellingOrderService]
    })
], ProductSellingOrderModule);
exports.ProductSellingOrderModule = ProductSellingOrderModule;
//# sourceMappingURL=product-selling-order.module.js.map