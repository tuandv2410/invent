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
exports.UserDto = exports.role = void 0;
const class_validator_1 = require("class-validator");
const nestjsx_automapper_1 = require("nestjsx-automapper");
const permission_dto_1 = require("../../permission/dto/permission.dto");
const automapper_1 = require("@nartc/automapper");
const user_entity_1 = require("../../../entities/authentication/user.entity");
class role {
}
__decorate([
    nestjsx_automapper_1.AutoMap(),
    __metadata("design:type", Number)
], role.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    __metadata("design:type", String)
], role.prototype, "name", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    __metadata("design:type", String)
], role.prototype, "description", void 0);
exports.role = role;
class UserDto {
}
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], UserDto.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UserDto.prototype, "username", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UserDto.prototype, "organization", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => permission_dto_1.PermissionDto),
    __metadata("design:type", Array)
], UserDto.prototype, "permissionsDto", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => role),
    __metadata("design:type", Array)
], UserDto.prototype, "rolesDto", void 0);
exports.UserDto = UserDto;
automapper_1.Mapper.createMap(user_entity_1.UserEntity, UserDto)
    .forMember(d => d.rolesDto, automapper_1.mapFrom(s => s.roles))
    .forMember(d => d.permissionsDto, automapper_1.mapFrom(s => s.permissions));
//# sourceMappingURL=user.dto.js.map