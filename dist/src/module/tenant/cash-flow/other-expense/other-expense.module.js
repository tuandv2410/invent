"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtherExpenseModule = void 0;
const common_1 = require("@nestjs/common");
const other_expense_controller_1 = require("./other-expense.controller");
const other_expense_service_1 = require("./other-expense.service");
let OtherExpenseModule = class OtherExpenseModule {
};
OtherExpenseModule = __decorate([
    common_1.Module({
        controllers: [other_expense_controller_1.OtherExpenseController],
        providers: [other_expense_service_1.OtherExpenseService]
    })
], OtherExpenseModule);
exports.OtherExpenseModule = OtherExpenseModule;
//# sourceMappingURL=other-expense.module.js.map