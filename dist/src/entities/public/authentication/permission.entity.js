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
exports.PermissionEntity = void 0;
const role_entity_1 = require("./role.entity");
const typeorm_1 = require("typeorm");
const nestjsx_automapper_1 = require("nestjsx-automapper");
const user_entity_1 = require("./user.entity");
let PermissionEntity = class PermissionEntity extends typeorm_1.BaseEntity {
};
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], PermissionEntity.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
        unique: true
    }),
    __metadata("design:type", String)
], PermissionEntity.prototype, "name", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], PermissionEntity.prototype, "description", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.ManyToMany(type => user_entity_1.UserEntity, user => user.permissions, {
        cascade: true
    }),
    typeorm_1.JoinTable({ name: 'users-permissions' }),
    __metadata("design:type", Array)
], PermissionEntity.prototype, "users", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.ManyToMany(type => role_entity_1.RoleEntity, role => role.permissions, {
        cascade: true
    }),
    typeorm_1.JoinTable({ name: 'roles-permissions' }),
    __metadata("design:type", Array)
], PermissionEntity.prototype, "roles", void 0);
PermissionEntity = __decorate([
    typeorm_1.Entity('permission')
], PermissionEntity);
exports.PermissionEntity = PermissionEntity;
//# sourceMappingURL=permission.entity.js.map