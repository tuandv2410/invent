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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const role_entity_1 = require("../../entities/authentication/role.entity");
const typeorm_2 = require("typeorm");
const permission_service_1 = require("../permission/permission.service");
let RoleService = class RoleService {
    constructor(roleRepository, permissionService) {
        this.roleRepository = roleRepository;
        this.permissionService = permissionService;
    }
    async getById(id) {
        const found = await this.roleRepository.findOne({ id });
        if (!found) {
            throw new common_1.HttpException(`Role with ID "${id}" not found!`, common_1.HttpStatus.NOT_FOUND);
        }
        return found;
    }
    async getAll() {
        try {
            const res = await this.roleRepository
                .createQueryBuilder("role")
                .leftJoinAndSelect("role.permissions", "permission")
                .getMany();
            return res;
        }
        catch (error) {
            throw new common_1.HttpException('Internal server error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getByUserId(userId) {
        try {
            const roles = await this.roleRepository
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
    async create(createRoleDto) {
        const { name, description } = createRoleDto;
        const role = new role_entity_1.RoleEntity();
        role.name = name;
        role.description = description;
        try {
            await role.save();
        }
        catch (error) {
            if (error.code === '23505') {
                throw new common_1.HttpException('Role already exists', common_1.HttpStatus.CONFLICT);
            }
            else {
                throw new common_1.HttpException('Internal server error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        return role;
    }
    async addPermissions(addPermissionsDto) {
        const { roleId, permissionsId } = addPermissionsDto;
        const role = await this.roleRepository.findOne(roleId);
        const permission1 = await this.permissionService.getMany(permissionsId);
        const permission2 = await this.permissionService.getByRoleId(roleId);
        role.permissions = [...permission1, ...permission2];
        console.log(permissionsId);
        await role.save();
        const res = await this.roleRepository
            .createQueryBuilder("role")
            .leftJoinAndSelect("role.permissions", "permission")
            .where("role.id = :rid", { rid: roleId })
            .getOne();
        return res;
    }
    async update(updateRoleDto) {
        const { id, name, description } = updateRoleDto;
        const role = await this.getById(id);
        role.name = name;
        role.description = description;
        try {
            await role.save();
        }
        catch (error) {
            throw new common_1.HttpException('Internal server error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return role;
    }
    async delete(id) {
        const result = await this.roleRepository.delete({ id });
        if (result.affected === 0) {
            throw new common_1.HttpException(`Role with ID "${id}" not found!`, common_1.HttpStatus.NOT_FOUND);
        }
        return {
            succes: true,
            message: "deleted",
        };
    }
};
RoleService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(role_entity_1.RoleEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        permission_service_1.PermissionService])
], RoleService);
exports.RoleService = RoleService;
//# sourceMappingURL=role.service.js.map