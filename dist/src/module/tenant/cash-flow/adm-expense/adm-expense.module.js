"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdmExpenseModule = void 0;
const common_1 = require("@nestjs/common");
const adm_expense_controller_1 = require("./adm-expense.controller");
const adm_expense_service_1 = require("./adm-expense.service");
let AdmExpenseModule = class AdmExpenseModule {
};
AdmExpenseModule = __decorate([
    common_1.Module({
        controllers: [adm_expense_controller_1.AdmExpenseController],
        providers: [adm_expense_service_1.AdmExpenseService]
    })
], AdmExpenseModule);
exports.AdmExpenseModule = AdmExpenseModule;
//# sourceMappingURL=adm-expense.module.js.map