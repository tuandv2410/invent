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
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const permissions_decorator_1 = require("../auth/permissions.decorator");
const permissions_guard_1 = require("../auth/permissions.guard");
const add_permissions_dto_1 = require("./dto/add-permissions.dto");
const user_dto_1 = require("./dto/user.dto");
const user_service_1 = require("./user.service");
const automapper_1 = require("@nartc/automapper");
const add_role_dto_1 = require("./dto/add-role.dto");
const change_password_dto_1 = require("./dto/change-password.dto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async addPermissions(addPermissionsDto) {
        const user = await this.userService.addPermissions(addPermissionsDto);
        return automapper_1.Mapper.map(user, user_dto_1.UserDto);
    }
    async getAll() {
        const result = await this.userService.getAll();
        return automapper_1.Mapper.mapArray(result, user_dto_1.UserDto);
    }
    async getById(userId) {
        const result = await this.userService.getById(userId);
        return automapper_1.Mapper.map(result, user_dto_1.UserDto);
    }
    async addRoles(addRolesDto) {
        const user = await this.userService.addRole(addRolesDto);
        return automapper_1.Mapper.map(user, user_dto_1.UserDto);
    }
    async changePassword(changePasswordDto) {
        return await this.userService.changePassword(changePasswordDto);
    }
};
__decorate([
    common_1.Patch('addPermissions'),
    common_1.UseGuards(passport_1.AuthGuard('jwt'), permissions_guard_1.PermissionsGuard),
    permissions_decorator_1.Permissions('read:hello'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_permissions_dto_1.AddPermissionsDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addPermissions", null);
__decorate([
    common_1.Get('getAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAll", null);
__decorate([
    common_1.Get('getById'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getById", null);
__decorate([
    common_1.Patch('addRole'),
    common_1.UseGuards(passport_1.AuthGuard('jwt'), permissions_guard_1.PermissionsGuard),
    permissions_decorator_1.Permissions('read:hello'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_role_dto_1.AddRoleDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addRoles", null);
__decorate([
    common_1.Patch('changePassword'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [change_password_dto_1.ChangePasswordDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "changePassword", null);
UserController = __decorate([
    common_1.Controller('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map