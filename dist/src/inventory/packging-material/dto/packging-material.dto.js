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
exports.PackgingMaterialDto = void 0;
const nestjsx_automapper_1 = require("nestjsx-automapper");
const automapper_1 = require("@nartc/automapper");
const pm_category_enum_1 = require("../../enum/pm-category.enum");
const pm_type_enum_1 = require("../../enum/pm-type.enum");
const packging_material_entity_1 = require("../../../entities/inventory/packging-material.entity");
const class_validator_1 = require("class-validator");
const hu_type_enum_1 = require("../../enum/hu-type.enum");
const hu_status_enum_1 = require("../../enum/hu-status.enum");
class HandlingUnit {
}
class PackageSpecification {
}
class PackgingMaterialDto {
}
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], PackgingMaterialDto.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], PackgingMaterialDto.prototype, "type", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], PackgingMaterialDto.prototype, "category", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], PackgingMaterialDto.prototype, "tareWeight", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], PackgingMaterialDto.prototype, "tareVolume", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], PackgingMaterialDto.prototype, "capacities", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], PackgingMaterialDto.prototype, "handlingUnits", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], PackgingMaterialDto.prototype, "packageSpecifications", void 0);
exports.PackgingMaterialDto = PackgingMaterialDto;
automapper_1.Mapper.createMap(packging_material_entity_1.PackgingMaterialEntity, PackgingMaterialDto)
    .forMember(d => d.handlingUnits, automapper_1.mapFrom(s => s.handlingUnits)).forMember(d => d.packageSpecifications, automapper_1.mapFrom(s => s.packageSpecifications));
//# sourceMappingURL=packging-material.dto.js.map