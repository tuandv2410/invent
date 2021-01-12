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
exports.PackgingMaterialEntity = void 0;
const typeorm_1 = require("typeorm");
const nestjsx_automapper_1 = require("nestjsx-automapper");
const pm_type_enum_1 = require("../../../enum/pm-type.enum");
const pm_category_enum_1 = require("../../../enum/pm-category.enum");
const handling_unit_entity_1 = require("./handling-unit.entity");
const package_specification_entity_1 = require("./package-specification.entity");
let PackgingMaterialEntity = class PackgingMaterialEntity extends typeorm_1.BaseEntity {
};
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], PackgingMaterialEntity.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], PackgingMaterialEntity.prototype, "type", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], PackgingMaterialEntity.prototype, "category", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: true,
    }),
    __metadata("design:type", Number)
], PackgingMaterialEntity.prototype, "tareWeight", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: true,
    }),
    __metadata("design:type", Number)
], PackgingMaterialEntity.prototype, "tareVolume", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: true,
    }),
    __metadata("design:type", Number)
], PackgingMaterialEntity.prototype, "capacities", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => handling_unit_entity_1.HandlingUnitEntity),
    typeorm_1.OneToMany(type => handling_unit_entity_1.HandlingUnitEntity, handlingUnit => handlingUnit.packgingMaterial),
    __metadata("design:type", Array)
], PackgingMaterialEntity.prototype, "handlingUnits", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => package_specification_entity_1.PackageSpecificationEntity),
    typeorm_1.OneToMany(type => package_specification_entity_1.PackageSpecificationEntity, packageSpecification => packageSpecification.packgingMaterial),
    __metadata("design:type", Array)
], PackgingMaterialEntity.prototype, "packageSpecifications", void 0);
PackgingMaterialEntity = __decorate([
    typeorm_1.Entity('packging-material')
], PackgingMaterialEntity);
exports.PackgingMaterialEntity = PackgingMaterialEntity;
//# sourceMappingURL=packging-material.entity.js.map