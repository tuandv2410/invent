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
exports.BusinessPartnerController = void 0;
const common_1 = require("@nestjs/common");
const business_partner_service_1 = require("./business-partner.service");
const create_business_partner_dto_1 = require("./dto/create-business-partner.dto");
const automapper_1 = require("@nartc/automapper");
const business_partner_dto_1 = require("./dto/business-partner.dto");
const filter_search_bp_dto_1 = require("./dto/filter-search-bp.dto");
const update_business_partner_dto_1 = require("./dto/update-business-partner.dto");
let BusinessPartnerController = class BusinessPartnerController {
    constructor(bpService) {
        this.bpService = bpService;
    }
    async create(createBpDto) {
        const result = await this.bpService.create(createBpDto);
        return automapper_1.Mapper.map(result, business_partner_dto_1.BusinessPartnerDto);
    }
    async getBps(filterDto) {
        const result = await this.bpService.getBP(filterDto);
        return automapper_1.Mapper.mapArray(result, business_partner_dto_1.BusinessPartnerDto);
    }
    async updateBp(updateDto) {
        const result = await this.bpService.update(updateDto);
        return automapper_1.Mapper.map(result, business_partner_dto_1.BusinessPartnerDto);
    }
};
__decorate([
    common_1.Post('create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_business_partner_dto_1.CreateBPDto]),
    __metadata("design:returntype", Promise)
], BusinessPartnerController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_search_bp_dto_1.GetBpsFilterDto]),
    __metadata("design:returntype", Promise)
], BusinessPartnerController.prototype, "getBps", null);
__decorate([
    common_1.Patch('updateBp'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_business_partner_dto_1.UpdateBPDto]),
    __metadata("design:returntype", Promise)
], BusinessPartnerController.prototype, "updateBp", null);
BusinessPartnerController = __decorate([
    common_1.Controller('business-partner'),
    __metadata("design:paramtypes", [business_partner_service_1.BusinessPartnerService])
], BusinessPartnerController);
exports.BusinessPartnerController = BusinessPartnerController;
//# sourceMappingURL=business-partner.controller.js.map