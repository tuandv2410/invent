"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const sku_module_1 = require("../../inventory/sku/sku.module");
const adding_service_module_1 = require("../adding-service/adding-service.module");
const business_contract_module_1 = require("../business-contract/business-contract.module");
const business_partner_module_1 = require("../business-partner/business-partner.module");
const payment_module_1 = require("../payment/payment.module");
const product_order_module_1 = require("../product-order/product-order.module");
const shipment_module_1 = require("../shipment/shipment.module");
const order_controller_1 = require("./order.controller");
const order_repository_1 = require("./order.repository");
const order_service_1 = require("./order.service");
let OrderModule = class OrderModule {
};
OrderModule = __decorate([
    common_1.Module({
        imports: [
            common_1.forwardRef(() => business_partner_module_1.BusinessPartnerModule),
            common_1.forwardRef(() => business_contract_module_1.BusinessContractModule),
            common_1.forwardRef(() => product_order_module_1.ProductOrderModule),
            common_1.forwardRef(() => shipment_module_1.ShipmentModule),
            common_1.forwardRef(() => payment_module_1.PaymentModule),
            common_1.forwardRef(() => adding_service_module_1.AddingServiceModule),
            common_1.forwardRef(() => sku_module_1.SkuModule),
        ],
        controllers: [order_controller_1.OrderController],
        providers: [
            order_service_1.OrderService,
            order_repository_1.OrderRepository
        ],
        exports: [order_service_1.OrderService]
    })
], OrderModule);
exports.OrderModule = OrderModule;
//# sourceMappingURL=order.module.js.map