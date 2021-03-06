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
exports.RoleDto = void 0;
const class_validator_1 = require("class-validator");
const nestjsx_automapper_1 = require("nestjsx-automapper");
const automapper_1 = require("@nartc/automapper");
const role_entity_1 = require("../../../../../entities/public/authentication/role.entity");
class Permission {
}
class RoleDto {
}
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], RoleDto.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], RoleDto.prototype, "name", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], RoleDto.prototype, "description", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => Permission),
    __metadata("design:type", Array)
], RoleDto.prototype, "permissions", void 0);
exports.RoleDto = RoleDto;
automapper_1.Mapper.createMap(role_entity_1.RoleEntity, RoleDto)
    .forMember(d => d.permissions, automapper_1.mapFrom(s => s.permissions));
//# sourceMappingURL=role.dto.js.map