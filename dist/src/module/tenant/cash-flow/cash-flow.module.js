"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashFlowModule = void 0;
const common_1 = require("@nestjs/common");
const selling_expense_module_1 = require("./selling-expense/selling-expense.module");
const adm_expense_module_1 = require("./adm-expense/adm-expense.module");
const da_expense_module_1 = require("./da-expense/da-expense.module");
const other_expense_module_1 = require("./other-expense/other-expense.module");
const tax_expense_module_1 = require("./tax-expense/tax-expense.module");
const payroll_module_1 = require("./payroll/payroll.module");
const other_income_module_1 = require("./other-income/other-income.module");
let CashFlowModule = class CashFlowModule {
};
CashFlowModule = __decorate([
    common_1.Module({
        imports: [selling_expense_module_1.SellingExpenseModule, adm_expense_module_1.AdmExpenseModule, da_expense_module_1.DaExpenseModule, other_expense_module_1.OtherExpenseModule, tax_expense_module_1.TaxExpenseModule, payroll_module_1.PayrollModule, other_income_module_1.OtherIncomeModule]
    })
], CashFlowModule);
exports.CashFlowModule = CashFlowModule;
//# sourceMappingURL=cash-flow.module.js.map