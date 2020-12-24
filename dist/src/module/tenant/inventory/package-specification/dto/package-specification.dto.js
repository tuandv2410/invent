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
exports.PackageSpecificationDto = void 0;
const nestjsx_automapper_1 = require("nestjsx-automapper");
const automapper_1 = require("@nartc/automapper");
const package_specification_entity_1 = require("../../../../../entities/tenant/inventory/package-specification.entity");
const hu_status_enum_1 = require("../../enum/hu-status.enum");
const hu_type_enum_1 = require("../../enum/hu-type.enum");
const class_validator_1 = require("class-validator");
class HandlingUnit {
}
class PackageSpecificationDto {
}
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], PackageSpecificationDto.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], PackageSpecificationDto.prototype, "name", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], PackageSpecificationDto.prototype, "packingLevel", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], PackageSpecificationDto.prototype, "quantity", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], PackageSpecificationDto.prototype, "handlingUnits", void 0);
exports.PackageSpecificationDto = PackageSpecificationDto;
automapper_1.Mapper.createMap(package_specification_entity_1.PackageSpecificationEntity, PackageSpecificationDto)
    .forMember(d => d.handlingUnits, automapper_1.mapFrom(s => s.handlingUnits));
//# sourceMappingURL=package-specification.dto.js.map