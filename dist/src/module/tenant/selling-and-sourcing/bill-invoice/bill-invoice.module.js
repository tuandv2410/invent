"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillInvoiceModule = void 0;
const common_1 = require("@nestjs/common");
const bill_invoice_controller_1 = require("./bill-invoice.controller");
const bill_invoice_service_1 = require("./bill-invoice.service");
let BillInvoiceModule = class BillInvoiceModule {
};
BillInvoiceModule = __decorate([
    common_1.Module({
        controllers: [bill_invoice_controller_1.BillInvoiceController],
        providers: [bill_invoice_service_1.BillInvoiceService]
    })
], BillInvoiceModule);
exports.BillInvoiceModule = BillInvoiceModule;
//# sourceMappingURL=bill-invoice.module.js.map