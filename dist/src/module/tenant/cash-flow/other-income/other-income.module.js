"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtherIncomeModule = void 0;
const common_1 = require("@nestjs/common");
const other_income_controller_1 = require("./other-income.controller");
const other_income_service_1 = require("./other-income.service");
let OtherIncomeModule = class OtherIncomeModule {
};
OtherIncomeModule = __decorate([
    common_1.Module({
        controllers: [other_income_controller_1.OtherIncomeController],
        providers: [other_income_service_1.OtherIncomeService]
    })
], OtherIncomeModule);
exports.OtherIncomeModule = OtherIncomeModule;
//# sourceMappingURL=other-income.module.js.map