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
exports.PermissionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const permission_entity_1 = require("../../entities/authentication/permission.entity");
const typeorm_2 = require("typeorm");
let PermissionService = class PermissionService {
    constructor(permissionRepository) {
        this.permissionRepository = permissionRepository;
    }
    async getById(id) {
        const found = await this.permissionRepository.findOne({ id });
        if (!found) {
            throw new common_1.HttpException(`Permission with ID "${id}" not found!`, common_1.HttpStatus.NOT_FOUND);
        }
        return found;
    }
    async getAll() {
        try {
            return this.permissionRepository.find();
        }
        catch (error) {
            throw new common_1.HttpException('Internal server error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getMany(ids) {
        try {
            const permissions = await this.permissionRepository
                .createQueryBuilder("permission")
                .where("permission.id IN (:...permissionsId)", { permissionsId: ids })
                .getMany();
            return permissions;
        }
        catch (error) {
            throw new common_1.HttpException('Internal server error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getByUserId(userId) {
        try {
            const permissions = await this.permissionRepository
                .createQueryBuilder("permission")
                .leftJoin("permission.users", "user")
                .where("user.id = :userId", { userId: userId })
                .getMany();
            return permissions;
        }
        catch (error) {
            throw new common_1.HttpException('Internal server error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getByRoleId(roleId) {
        try {
            const permissions = await this.permissionRepository
                .createQueryBuilder("permission")
                .leftJoin("permission.roles", "role")
                .where("role.id = :roleId", { roleId: roleId })
                .getMany();
            return permissions;
        }
        catch (error) {
            throw new common_1.HttpException('Internal server error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async create(createPermissionDto) {
        const { name, description } = createPermissionDto;
        const permission = new permission_entity_1.PermissionEntity();
        permission.name = name;
        permission.description = description;
        try {
            await permission.save();
        }
        catch (error) {
            if (error.code === '23505') {
                throw new common_1.HttpException('Permission already exists', common_1.HttpStatus.CONFLICT);
            }
            else {
                throw new common_1.HttpException('Internal server error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        return permission;
    }
    async update(updatePermissionDto) {
        const { id, name, description } = updatePermissionDto;
        const permission = await this.getById(id);
        permission.name = name;
        permission.description = description;
        try {
            await permission.save();
        }
        catch (error) {
            throw new common_1.HttpException('Internal server error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return permission;
    }
    async delete(id) {
        const result = await this.permissionRepository.delete({ id });
        if (result.affected === 0) {
            throw new common_1.HttpException(`Permission with ID "${id}" not found!`, common_1.HttpStatus.NOT_FOUND);
        }
        return {
            succes: true,
            message: "deleted",
        };
    }
};
PermissionService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(permission_entity_1.PermissionEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PermissionService);
exports.PermissionService = PermissionService;
//# sourceMappingURL=permission.service.js.map