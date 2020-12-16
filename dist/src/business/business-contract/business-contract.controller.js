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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessContractController = void 0;
const common_1 = require("@nestjs/common");
const automapper_1 = require("@nartc/automapper");
const uuid_1 = require("uuid");
const business_contract_service_1 = require("./business-contract.service");
const filter_get_business_contract_dto_1 = require("./dto/filter-get-business-contract.dto");
const business_contract_dto_1 = require("./dto/business-contract.dto");
const create_business_contract_dto_1 = require("./dto/create-business-contract.dto");
const update_business_contract_dto_1 = require("./dto/update-business-contract.dto");
const delete_result_interface_1 = require("../../interfaces/delete-result.interface");
const business_partner_service_1 = require("../business-partner/business-partner.service");
const result_interface_1 = require("../../interfaces/result.interface");
let BusinessContractController = class BusinessContractController {
    constructor(service, bpService) {
        this.service = service;
        this.bpService = bpService;
    }
    async get(filterDto) {
        const result = await this.service.get(filterDto);
        return automapper_1.Mapper.mapArray(result, business_contract_dto_1.BusinessContractDto);
    }
    async getWithRelations(filterDto) {
        const result = await this.service.getWithRelations(filterDto);
        return automapper_1.Mapper.mapArray(result, business_contract_dto_1.BusinessContractDto);
    }
    async create(userData) {
        const id = uuid_1.v4();
        const data = Object.assign({ id }, userData);
        return await this.service.store(data);
    }
    async update(id, userData) {
        const result = await this.service.update(id, userData);
        return automapper_1.Mapper.map(result, business_contract_dto_1.BusinessContractDto);
    }
    async destroy(id) {
        return this.service.delete(id);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_get_business_contract_dto_1.FilterGetBusinessContractDto]),
    __metadata("design:returntype", Promise)
], BusinessContractController.prototype, "get", null);
__decorate([
    common_1.Get('/getWithRelations'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_get_business_contract_dto_1.FilterGetBusinessContractDto]),
    __metadata("design:returntype", Promise)
], BusinessContractController.prototype, "getWithRelations", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_business_contract_dto_1.CreateBusinessContractDto]),
    __metadata("design:returntype", Promise)
], BusinessContractController.prototype, "create", null);
__decorate([
    common_1.Put('/:id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_business_contract_dto_1.UpdateBusinessContractDto]),
    __metadata("design:returntype", Promise)
], BusinessContractController.prototype, "update", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BusinessContractController.prototype, "destroy", null);
BusinessContractController = __decorate([
    common_1.Controller('business-contract'),
    __metadata("design:paramtypes", [business_contract_service_1.BusinessContractService,
        business_partner_service_1.BusinessPartnerService])
], BusinessContractController);
exports.BusinessContractController = BusinessContractController;
//# sourceMappingURL=business-contract.controller.js.map