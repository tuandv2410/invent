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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../../../entities/authentication/user.entity");
const base_service_1 = require("../../../base/base.service");
const user_repository_1 = require("./user.repository");
const permission_entity_1 = require("../../../entities/authentication/permission.entity");
const role_entity_1 = require("../../../entities/authentication/role.entity");
const result_interface_1 = require("../../../interfaces/result.interface");
const bcrypt = require("bcrypt");
let UserService = class UserService extends base_service_1.BaseService {
    constructor(repository) {
        super(repository);
    }
    async login(userData) {
        const { username, password } = userData;
        const user = this.get({ username: username })[0];
        if (!user) {
            throw new common_1.HttpException('User not found', common_1.HttpStatus.UNAUTHORIZED);
        }
        const areEqual = await user.validatePassword(password);
        if (!areEqual) {
            throw new common_1.HttpException('Invalid credentials', common_1.HttpStatus.UNAUTHORIZED);
        }
        return user;
    }
    async changePassword(userData) {
        let status = {
            succes: true,
            message: 'password change success',
        };
        try {
            const { username, password, newPassword } = userData;
            const user = await this.login({ username, password });
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
    async addRole(user, role) {
        user.roles = [...user.roles, role];
        await user.save();
    }
    async addPermission(user, permissions) {
        user.permissions = [...user.permissions, ...permissions];
        await user.save();
    }
    async hashPassword(password, salt) {
        return bcrypt.hash(password, salt);
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map