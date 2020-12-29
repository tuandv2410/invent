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
exports.OrganizationEntity = void 0;
const nestjsx_automapper_1 = require("nestjsx-automapper");
const typeorm_1 = require("typeorm");
const role_entity_1 = require("./role.entity");
const user_entity_1 = require("./user.entity");
let OrganizationEntity = class OrganizationEntity extends typeorm_1.BaseEntity {
};
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], OrganizationEntity.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
        unique: true
    }),
    __metadata("design:type", String)
], OrganizationEntity.prototype, "name", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => user_entity_1.UserEntity),
    typeorm_1.OneToOne(type => user_entity_1.UserEntity, admin => admin.adminOrg),
    __metadata("design:type", user_entity_1.UserEntity)
], OrganizationEntity.prototype, "admin", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => user_entity_1.UserEntity),
    typeorm_1.OneToMany(type => user_entity_1.UserEntity, user => user.org),
    __metadata("design:type", user_entity_1.UserEntity)
], OrganizationEntity.prototype, "users", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => role_entity_1.RoleEntity),
    typeorm_1.OneToMany(type => role_entity_1.RoleEntity, role => role.organization),
    __metadata("design:type", role_entity_1.RoleEntity)
], OrganizationEntity.prototype, "roles", void 0);
OrganizationEntity = __decorate([
    typeorm_1.Entity('organization')
], OrganizationEntity);
exports.OrganizationEntity = OrganizationEntity;
//# sourceMappingURL=organization.entity.js.map