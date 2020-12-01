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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const user_entity_1 = require("../../entities/authentication/user.entity");
const role_service_1 = require("../role/role.service");
const permission_service_1 = require("../permission/permission.service");
let UserService = class UserService {
    constructor(userRepository, permissionService, roleService) {
        this.userRepository = userRepository;
        this.permissionService = permissionService;
        this.roleService = roleService;
    }
    async create(createUserDto) {
        const { username, password, email, organization } = createUserDto;
        const user = new user_entity_1.UserEntity();
        user.username = username;
        user.salt = await bcrypt.genSalt();
        user.password = await this.hashPassword(password, user.salt);
        user.email = email;
        user.organization = organization;
        try {
            await user.save();
        }
        catch (error) {
            if (error.code === '23505') {
                throw new common_1.HttpException('Username or Email already exists', common_1.HttpStatus.CONFLICT);
            }
            else {
                throw new common_1.HttpException('Internal server error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        return user;
    }
    async getAll() {
        try {
            const res = await this.userRepository
                .createQueryBuilder("user")
                .leftJoinAndSelect("user.roles", "role")
                .leftJoinAndSelect("user.permissions", "permission")
                .getMany();
            return res;
        }
        catch (error) {
            throw new common_1.HttpException('Internal server error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getById(userId) {
        try {
            const res = await this.userRepository
                .createQueryBuilder("user")
                .leftJoinAndSelect("user.roles", "role")
                .leftJoinAndSelect("user.permissions", "permission")
                .where("user.id = :uid", { uid: userId })
                .getOne();
            if (!res) {
                throw new common_1.HttpException('User not found', common_1.HttpStatus.UNAUTHORIZED);
            }
            return res;
        }
        catch (error) {
            throw new common_1.HttpException('Internal server error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findByLogin(loginUserDto) {
        const { username, password } = loginUserDto;
        const user = await this.userRepository
            .createQueryBuilder("user")
            .leftJoinAndSelect("user.permissions", "permission")
            .where("user.username = :username", { username: username })
            .getOne();
        if (!user) {
            throw new common_1.HttpException('User not found', common_1.HttpStatus.UNAUTHORIZED);
        }
        const areEqual = await user.validatePassword(password);
        if (!areEqual) {
            throw new common_1.HttpException('Invalid credentials', common_1.HttpStatus.UNAUTHORIZED);
        }
        return user;
    }
    async findByUsername(username) {
        const user = await this.userRepository.findOne({ where: { username } });
        return user;
    }
    async changePassword(changePasswordDto) {
        let status = {
            succes: true,
            message: 'password change success',
        };
        try {
            const { username, password, newPassword } = changePasswordDto;
            const user = await this.findByLogin({ username, password });
            if (!user) {
                throw new common_1.HttpException('Wrong password!', common_1.HttpStatus.UNAUTHORIZED);
            }
            user.salt = await bcrypt.genSalt();
            user.password = await this.hashPassword(newPassword, user.salt);
            user.save();
        }
        catch (err) {
            status = {
                succes: false,
                message: err,
            };
        }
        return status;
    }
    async checkPermission(checkPermissionDto) {
        const { userId, permissionId } = checkPermissionDto;
        const user = await this.userRepository
            .createQueryBuilder("user")
            .leftJoin("user.permissions", "permission")
            .where("user.id = :uid AND permission.id = :pid", { uid: userId, pid: permissionId })
            .getOne();
        if (user)
            return true;
        else
            return false;
    }
    async addRole(addRoleDto) {
        const { userId, roleId } = addRoleDto;
        const user = await this.userRepository.findOne(userId);
        const role1 = await this.roleService.getById(roleId);
        const role2 = await this.roleService.getByUserId(userId);
        user.roles = [role1, ...role2];
        const permission1 = await this.permissionService.getByRoleId(roleId);
        const permission2 = await this.permissionService.getByUserId(userId);
        user.permissions = [...permission1, ...permission2];
        await user.save();
        const res = await this.getById(userId);
        return res;
    }
    async addPermissions(addPermissionsDto) {
        const { userId, permissionsId } = addPermissionsDto;
        const user = await this.userRepository.findOne(userId);
        const permission1 = await this.permissionService.getMany(permissionsId);
        const permission2 = await this.permissionService.getByUserId(userId);
        user.permissions = [...permission1, ...permission2];
        await user.save();
        const res = await this.getById(userId);
        return res;
    }
    async hashPassword(password, salt) {
        return bcrypt.hash(password, salt);
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        permission_service_1.PermissionService,
        role_service_1.RoleService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map