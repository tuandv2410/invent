"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessContractModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const business_contract_controller_1 = require("./business-contract.controller");
const business_contract_service_1 = require("./business-contract.service");
const business_contract_repository_1 = require("./business-contract.repository");
const business_partner_module_1 = require("../business-partner/business-partner.module");
let BusinessContractModule = class BusinessContractModule {
};
BusinessContractModule = __decorate([
    common_1.Module({
        imports: [
            business_partner_module_1.BusinessPartnerModule,
            typeorm_1.TypeOrmModule.forFeature([business_contract_repository_1.BusinessContractRepository]),
        ],
        controllers: [business_contract_controller_1.BusinessContractController],
        providers: [business_contract_service_1.BusinessContractService],
        exports: [business_contract_service_1.BusinessContractService]
    })
], BusinessContractModule);
exports.BusinessContractModule = BusinessContractModule;
//# sourceMappingURL=business-contract.module.js.map