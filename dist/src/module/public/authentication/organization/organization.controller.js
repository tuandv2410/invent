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
exports.OrganizationController = void 0;
const delete_result_interface_1 = require("../../../../interfaces/delete-result.interface");
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const organization_service_1 = require("./organization.service");
const filter_get_organization_dto_1 = require("./dto/filter-get-organization.dto");
const organization_dto_1 = require("./dto/organization.dto");
const automapper_1 = require("@nartc/automapper");
const create_organization_dto_1 = require("./dto/create-organization.dto");
const update_organization_dto_1 = require("./dto/update-organization.dto");
const create_schema_1 = require("../../../../schema/create_schema");
let OrganizationController = class OrganizationController {
    constructor(service) {
        this.service = service;
    }
    async get(filterDto) {
        const result = await this.service.get(filterDto);
        return automapper_1.Mapper.mapArray(result, organization_dto_1.OrganizationDto);
    }
    async getWithRelations(filterDto) {
        const result = await this.service.getWithRelations(filterDto);
        return automapper_1.Mapper.mapArray(result, organization_dto_1.OrganizationDto);
    }
    async create(userData) {
        const id = uuid_1.v4();
        const data = Object.assign({ id }, userData);
        const res = await this.service.store(data);
        await create_schema_1.create_schema(userData.name);
        return res;
    }
    async update(id, userData) {
        const result = await this.service.update(id, userData);
        return automapper_1.Mapper.map(result, organization_dto_1.OrganizationDto);
    }
    async destroy(id) {
        return this.service.delete(id);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_get_organization_dto_1.FilterGetOrganizationDto]),
    __metadata("design:returntype", Promise)
], OrganizationController.prototype, "get", null);
__decorate([
    common_1.Get('/getWithRelations'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_get_organization_dto_1.FilterGetOrganizationDto]),
    __metadata("design:returntype", Promise)
], OrganizationController.prototype, "getWithRelations", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_organization_dto_1.CreateOrganizationDto]),
    __metadata("design:returntype", Promise)
], OrganizationController.prototype, "create", null);
__decorate([
    common_1.Put('/:id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_organization_dto_1.UpdateOrganizationDto]),
    __metadata("design:returntype", Promise)
], OrganizationController.prototype, "update", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrganizationController.prototype, "destroy", null);
OrganizationController = __decorate([
    common_1.Controller('Organization'),
    __metadata("design:paramtypes", [organization_service_1.OrganizationService])
], OrganizationController);
exports.OrganizationController = OrganizationController;
//# sourceMappingURL=organization.controller.js.map