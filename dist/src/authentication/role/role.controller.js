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
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const add_permissions_dto_1 = require("./dto/add-permissions.dto");
const create_role_dto_1 = require("./dto/create-role.dto");
const role_dto_1 = require("./dto/role.dto");
const role_service_1 = require("./role.service");
const automapper_1 = require("@nartc/automapper");
const permissions_decorator_1 = require("../auth/permissions.decorator");
const permissions_guard_1 = require("../auth/permissions.guard");
let RoleController = class RoleController {
    constructor(roleService) {
        this.roleService = roleService;
    }
    async create(createRoleDto) {
        const result = await this.roleService.create(createRoleDto);
        return automapper_1.Mapper.map(result, role_dto_1.RoleDto);
    }
    async getAll() {
        const result = await this.roleService.getAll();
        return automapper_1.Mapper.mapArray(result, role_dto_1.RoleDto);
    }
    async addPermissions(addPermissionsDto) {
        const role = await this.roleService.addPermissions(addPermissionsDto);
        return automapper_1.Mapper.map(role, role_dto_1.RoleDto);
    }
};
__decorate([
    common_1.Post('create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_role_dto_1.CreateRoleDto]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "create", null);
__decorate([
    common_1.Get('getAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "getAll", null);
__decorate([
    common_1.Patch('addPermissions'),
    common_1.UseGuards(passport_1.AuthGuard('jwt'), permissions_guard_1.PermissionsGuard),
    permissions_decorator_1.Permissions('read:hello'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_permissions_dto_1.AddPermissionsDto]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "addPermissions", null);
RoleController = __decorate([
    common_1.Controller('role'),
    __metadata("design:paramtypes", [role_service_1.RoleService])
], RoleController);
exports.RoleController = RoleController;
//# sourceMappingURL=role.controller.js.map