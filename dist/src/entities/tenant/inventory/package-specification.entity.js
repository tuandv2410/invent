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
exports.PackageSpecificationEntity = void 0;
const typeorm_1 = require("typeorm");
const nestjsx_automapper_1 = require("nestjsx-automapper");
const handling_unit_entity_1 = require("./handling-unit.entity");
const product_entity_1 = require("./product.entity");
const packging_material_entity_1 = require("./packging-material.entity");
let PackageSpecificationEntity = class PackageSpecificationEntity extends typeorm_1.BaseEntity {
};
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], PackageSpecificationEntity.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], PackageSpecificationEntity.prototype, "name", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PackageSpecificationEntity.prototype, "packingLevel", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PackageSpecificationEntity.prototype, "quantity", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => handling_unit_entity_1.HandlingUnitEntity),
    typeorm_1.OneToMany(type => handling_unit_entity_1.HandlingUnitEntity, handlingUnit => handlingUnit.packageSpecification),
    __metadata("design:type", Array)
], PackageSpecificationEntity.prototype, "handlingUnits", void 0);
__decorate([
    typeorm_1.ManyToOne(type => product_entity_1.ProductEntity, product => product.packageSpecifications, {
        cascade: true
    }),
    __metadata("design:type", product_entity_1.ProductEntity)
], PackageSpecificationEntity.prototype, "product", void 0);
__decorate([
    typeorm_1.ManyToOne(type => packging_material_entity_1.PackgingMaterialEntity, packgingMaterial => packgingMaterial.packageSpecifications, {
        cascade: true
    }),
    __metadata("design:type", packging_material_entity_1.PackgingMaterialEntity)
], PackageSpecificationEntity.prototype, "packgingMaterial", void 0);
PackageSpecificationEntity = __decorate([
    typeorm_1.Entity('package-specification')
], PackageSpecificationEntity);
exports.PackageSpecificationEntity = PackageSpecificationEntity;
//# sourceMappingURL=package-specification.entity.js.map