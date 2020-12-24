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
exports.UserController = void 0;
const delete_result_interface_1 = require("../../../../interfaces/delete-result.interface");
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const bcrypt = require("bcrypt");
const user_dto_1 = require("./dto/user.dto");
const user_service_1 = require("./user.service");
const automapper_1 = require("@nartc/automapper");
const filter_get_user_dto_1 = require("./dto/filter-get-user.dto");
const create_user_dto_1 = require("./dto/create.user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const permission_service_1 = require("../permission/permission.service");
const role_service_1 = require("../role/role.service");
const add_permissions_dto_1 = require("./dto/add-permissions.dto");
const add_role_dto_1 = require("./dto/add-role.dto");
const user_entity_1 = require("../../../../entities/public/authentication/user.entity");
const class_transformer_1 = require("class-transformer");
let UserController = class UserController {
    constructor(service, permissionService, roleService) {
        this.service = service;
        this.permissionService = permissionService;
        this.roleService = roleService;
    }
    async get(filterDto) {
        const result = await this.service.get(filterDto);
        return automapper_1.Mapper.mapArray(result, user_dto_1.UserDto);
    }
    async getWithRelations(filterDto) {
        const result = await this.service.getWithRelations(filterDto);
        return automapper_1.Mapper.mapArray(result, user_dto_1.UserDto);
    }
    async create(userData) {
        const id = uuid_1.v4();
        const salt = await bcrypt.genSalt();
        userData.password = await this.service.hashPassword(userData.password, salt);
        const data = Object.assign({ id, salt }, userData);
        const storeData = await this.service.store(data);
        const result = class_transformer_1.plainToClass(user_entity_1.UserEntity, storeData);
        return automapper_1.Mapper.map(result, user_dto_1.UserDto);
    }
    async update(id, userData) {
        const result = await this.service.update(id, userData);
        return automapper_1.Mapper.map(result, user_dto_1.UserDto);
    }
    async destroy(id) {
        return this.service.delete(id);
    }
    async addPermission(userData) {
        const { idUser, idPermissions } = userData;
        const user = await this.service.findById(idUser);
        const currentPermissions = await this.permissionService.getByUser(idUser);
        const newPermissions = await this.permissionService.findByIds(idPermissions);
        user.permissions = [...currentPermissions, ...newPermissions];
        await user.save();
        const result = await this.service.getWithRelations({ id: idUser });
        return automapper_1.Mapper.map(result[0], user_dto_1.UserDto);
    }
    async addRole(userData) {
        const { idUser, idRole } = userData;
        const user = await this.service.findById(idUser);
        const currentRoles = await this.roleService.getByUser(idUser);
        const newRole = await this.roleService.findById(idRole);
        user.roles = [...currentRoles, newRole];
        await user.save();
        const result = await this.service.getWithRelations({ id: idUser });
        return automapper_1.Mapper.map(result[0], user_dto_1.UserDto);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_get_user_dto_1.FilterGetUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "get", null);
__decorate([
    common_1.Get('/getWithRelations'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_get_user_dto_1.FilterGetUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getWithRelations", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    common_1.Put('/:id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "destroy", null);
__decorate([
    common_1.Patch('/addPermission'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_permissions_dto_1.AddPermissionsDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addPermission", null);
__decorate([
    common_1.Patch('/addRole'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_role_dto_1.AddRoleDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addRole", null);
UserController = __decorate([
    common_1.Controller('user'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        permission_service_1.PermissionService,
        role_service_1.RoleService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map