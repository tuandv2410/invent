"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourcingModule = void 0;
const common_1 = require("@nestjs/common");
const sourcing_business_contracts_module_1 = require("./sourcing-business-contracts/sourcing-business-contracts.module");
const sourcing_shipment_module_1 = require("./sourcing-shipment/sourcing-shipment.module");
const sourcing_payment_module_1 = require("./sourcing-payment/sourcing-payment.module");
const product_sourcing_order_module_1 = require("./product-sourcing-order/product-sourcing-order.module");
const product_sourcing_contract_module_1 = require("./product-sourcing-contract/product-sourcing-contract.module");
const payment_voucher_module_1 = require("./payment-voucher/payment-voucher.module");
const account_module_1 = require("./account/account.module");
const account_payable_module_1 = require("./account-payable/account-payable.module");
const sourcing_order_module_1 = require("./sourcing-order/sourcing-order.module");
let SourcingModule = class SourcingModule {
};
SourcingModule = __decorate([
    common_1.Module({
        imports: [sourcing_business_contracts_module_1.SourcingBusinessContractsModule, sourcing_shipment_module_1.SourcingShipmentModule, sourcing_payment_module_1.SourcingPaymentModule, product_sourcing_order_module_1.ProductSourcingOrderModule, product_sourcing_contract_module_1.ProductSourcingContractModule, payment_voucher_module_1.PaymentVoucherModule, account_module_1.AccountModule, account_payable_module_1.AccountPayableModule, sourcing_order_module_1.SourcingOrderModule]
    })
], SourcingModule);
exports.SourcingModule = SourcingModule;
//# sourceMappingURL=sourcing.module.js.map