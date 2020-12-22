"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessContractService = void 0;
const common_1 = require("@nestjs/common");
const base_service_1 = require("../../../base/base.service");
const business_contract_entity_1 = require("../../../entities/business/business-contract.entity");
const business_partner_entity_1 = require("../../../entities/business/business-partner.entity");
const result_interface_1 = require("../../../interfaces/result.interface");
const business_contract_repository_1 = require("./business-contract.repository");
let BusinessContractService = class BusinessContractService extends base_service_1.BaseService {
    constructor(repository) {
        super(repository);
    }
};
BusinessContractService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [business_contract_repository_1.BusinessContractRepository])
], BusinessContractService);
exports.BusinessContractService = BusinessContractService;
//# sourceMappingURL=business-contract.service.js.map