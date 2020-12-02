"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessModule = void 0;
const common_1 = require("@nestjs/common");
const business_partner_module_1 = require("./business-partner/business-partner.module");
const business_contract_module_1 = require("./business-contract/business-contract.module");
const order_module_1 = require("./order/order.module");
const payment_module_1 = require("./payment/payment.module");
const shipment_module_1 = require("./shipment/shipment.module");
let BusinessModule = class BusinessModule {
};
BusinessModule = __decorate([
    common_1.Module({
        imports: [business_partner_module_1.BusinessPartnerModule, business_contract_module_1.BusinessContractModule, order_module_1.OrderModule, payment_module_1.PaymentModule, shipment_module_1.ShipmentModule]
    })
], BusinessModule);
exports.BusinessModule = BusinessModule;
//# sourceMappingURL=business.module.js.map