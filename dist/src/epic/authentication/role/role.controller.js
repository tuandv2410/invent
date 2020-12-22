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
exports.RoleController = void 0;
const delete_result_interface_1 = require("../../../interfaces/delete-result.interface");
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const create_role_dto_1 = require("./dto/create-role.dto");
const role_dto_1 = require("./dto/role.dto");
const role_service_1 = require("./role.service");
const automapper_1 = require("@nartc/automapper");
const filter_get_role_dto_1 = require("./dto/filter-get-role.dto");
const update_role_dto_1 = require("./dto/update-role.dto");
const add_permissions_dto_1 = require("./dto/add-permissions.dto");
const permission_service_1 = require("../permission/permission.service");
let RoleController = class RoleController {
    constructor(service, permissionService) {
        this.service = service;
        this.permissionService = permissionService;
    }
    async get(filterDto) {
        const result = await this.service.get(filterDto);
        return automapper_1.Mapper.mapArray(result, role_dto_1.RoleDto);
    }
    async getWithRelations(filterDto) {
        const result = await this.service.getWithRelations(filterDto);
        return automapper_1.Mapper.mapArray(result, role_dto_1.RoleDto);
    }
    async create(userData) {
        const id = uuid_1.v4();
        const data = Object.assign({ id }, userData);
        return await this.service.store(data);
    }
    async update(id, userData) {
        const result = await this.service.update(id, userData);
        return automapper_1.Mapper.map(result, role_dto_1.RoleDto);
    }
    async destroy(id) {
        return this.service.delete(id);
    }
    async addPermission(userData) {
        const { idRole, idPermissions } = userData;
        const role = await this.service.findById(idRole);
        const currentPermissions = await this.permissionService.getByRole(idRole);
        const newPermissions = await this.permissionService.findByIds(idPermissions);
        role.permissions = [...currentPermissions, ...newPermissions];
        await role.save();
        const result = await this.service.getWithRelations({ id: idRole });
        return automapper_1.Mapper.map(result[0], role_dto_1.RoleDto);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_get_role_dto_1.FilterGetRoleDto]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "get", null);
__decorate([
    common_1.Get('/getWithRelations'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_get_role_dto_1.FilterGetRoleDto]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "getWithRelations", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_role_dto_1.CreateRoleDto]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "create", null);
__decorate([
    common_1.Put('/:id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_role_dto_1.UpdateRoleDto]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "update", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "destroy", null);
__decorate([
    common_1.Patch('/addPermission'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_permissions_dto_1.AddPermissionsDto]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "addPermission", null);
RoleController = __decorate([
    common_1.Controller('role'),
    __metadata("design:paramtypes", [role_service_1.RoleService,
        permission_service_1.PermissionService])
], RoleController);
exports.RoleController = RoleController;
//# sourceMappingURL=role.controller.js.map