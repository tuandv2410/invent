"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellingAndSourcingModule = void 0;
const common_1 = require("@nestjs/common");
const bill_invoice_module_1 = require("./bill-invoice/bill-invoice.module");
const account_receivable_module_1 = require("./account-receivable/account-receivable.module");
const account_payable_module_1 = require("./account-payable/account-payable.module");
const inventory_module_1 = require("./inventory/inventory.module");
let SellingAndSourcingModule = class SellingAndSourcingModule {
};
SellingAndSourcingModule = __decorate([
    common_1.Module({
        imports: [bill_invoice_module_1.BillInvoiceModule, account_receivable_module_1.AccountReceivableModule, account_payable_module_1.AccountPayableModule, inventory_module_1.InventoryModule]
    })
], SellingAndSourcingModule);
exports.SellingAndSourcingModule = SellingAndSourcingModule;
//# sourceMappingURL=selling-and-sourcing.module.js.map