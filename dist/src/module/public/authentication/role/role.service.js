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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const base_service_1 = require("../../../../base/base.service");
const permission_entity_1 = require("../../../../entities/public/authentication/permission.entity");
const role_entity_1 = require("../../../../entities/public/authentication/role.entity");
const role_repository_1 = require("./role.repository");
let RoleService = class RoleService extends base_service_1.BaseService {
    constructor(repository) {
        super(repository);
    }
    async getByUser(userId) {
        try {
            const roles = await this.repository
                .createQueryBuilder("role")
                .leftJoin("role.users", "user")
                .where("user.id = :userId", { userId: userId })
                .getMany();
            return roles;
        }
        catch (error) {
            throw new common_1.HttpException('Internal server error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getByPermission(permissionId) {
        try {
            const roles = await this.repository
                .createQueryBuilder("role")
                .leftJoin("role.permissions", "permission")
                .where("permission.id = :permissionId", { permissionId: permissionId })
                .getMany();
            return roles;
        }
        catch (error) {
            throw new common_1.HttpException('Internal server error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
RoleService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [role_repository_1.RoleRepository])
], RoleService);
exports.RoleService = RoleService;
//# sourceMappingURL=role.service.js.map