"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellingModule = void 0;
const common_1 = require("@nestjs/common");
const selling_shipment_module_1 = require("./selling-shipment/selling-shipment.module");
const selling_payment_module_1 = require("./selling-payment/selling-payment.module");
const product_selling_order_module_1 = require("./product-selling-order/product-selling-order.module");
const product_selling_contract_module_1 = require("./product-selling-contract/product-selling-contract.module");
const selling_order_module_1 = require("./selling-order/selling-order.module");
const receipt_module_1 = require("./receipt/receipt.module");
const account_receivable_module_1 = require("./account-receivable/account-receivable.module");
const commission_module_1 = require("./commission/commission.module");
const revenue_module_1 = require("./revenue/revenue.module");
const selling_business_contract_module_1 = require("./selling-business-contract/selling-business-contract.module");
let SellingModule = class SellingModule {
};
SellingModule = __decorate([
    common_1.Module({
        imports: [selling_shipment_module_1.SellingShipmentModule, selling_payment_module_1.SellingPaymentModule, product_selling_order_module_1.ProductSellingOrderModule, product_selling_contract_module_1.ProductSellingContractModule, selling_order_module_1.SellingOrderModule, receipt_module_1.ReceiptModule, account_receivable_module_1.AccountReceivableModule, commission_module_1.CommissionModule, revenue_module_1.RevenueModule, selling_business_contract_module_1.SellingBusinessContractModule],
    })
], SellingModule);
exports.SellingModule = SellingModule;
//# sourceMappingURL=selling.module.js.map