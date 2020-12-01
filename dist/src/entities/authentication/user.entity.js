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
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
const permission_entity_1 = require("./permission.entity");
const nestjsx_automapper_1 = require("nestjsx-automapper");
const role_entity_1 = require("./role.entity");
let UserEntity = class UserEntity extends typeorm_1.BaseEntity {
    async validatePassword(userPassword) {
        const hash = await bcrypt.hash(userPassword, this.salt);
        return hash === this.password;
    }
};
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        type: 'varchar',
        nullable: false,
        unique: true
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "username", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        nullable: false,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        type: 'varchar',
        nullable: false,
        unique: true
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        type: 'varchar',
        nullable: false,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "organization", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        nullable: false,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "salt", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => permission_entity_1.PermissionEntity),
    typeorm_1.ManyToMany(type => permission_entity_1.PermissionEntity, permission => permission.users),
    __metadata("design:type", Array)
], UserEntity.prototype, "permissions", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => role_entity_1.RoleEntity),
    typeorm_1.ManyToMany(type => role_entity_1.RoleEntity, role => role.users),
    __metadata("design:type", Array)
], UserEntity.prototype, "roles", void 0);
UserEntity = __decorate([
    typeorm_1.Entity('user')
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map