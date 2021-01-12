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
exports.HandlingUnitEntity = void 0;
const typeorm_1 = require("typeorm");
const nestjsx_automapper_1 = require("nestjsx-automapper");
const hu_type_enum_1 = require("../../../enum/hu-type.enum");
const hu_status_enum_1 = require("../../../enum/hu-status.enum");
const sku_entity_1 = require("./sku.entity");
const product_entity_1 = require("./product.entity");
const package_specification_entity_1 = require("./package-specification.entity");
const packging_material_entity_1 = require("./packging-material.entity");
let HandlingUnitEntity = class HandlingUnitEntity extends typeorm_1.BaseEntity {
};
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], HandlingUnitEntity.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: true
    }),
    __metadata("design:type", String)
], HandlingUnitEntity.prototype, "parentId", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], HandlingUnitEntity.prototype, "type", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], HandlingUnitEntity.prototype, "dimension", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], HandlingUnitEntity.prototype, "weight", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], HandlingUnitEntity.prototype, "volume", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], HandlingUnitEntity.prototype, "totalPrice", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], HandlingUnitEntity.prototype, "currency", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], HandlingUnitEntity.prototype, "quantity", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], HandlingUnitEntity.prototype, "status", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => sku_entity_1.SkuEntity),
    typeorm_1.OneToMany(type => sku_entity_1.SkuEntity, sku => sku.handlingUnit),
    __metadata("design:type", Array)
], HandlingUnitEntity.prototype, "skus", void 0);
__decorate([
    typeorm_1.ManyToOne(type => product_entity_1.ProductEntity, product => product.handlingUnits, {
        cascade: true
    }),
    __metadata("design:type", product_entity_1.ProductEntity)
], HandlingUnitEntity.prototype, "product", void 0);
__decorate([
    typeorm_1.ManyToOne(type => package_specification_entity_1.PackageSpecificationEntity, packageSpecification => packageSpecification.handlingUnits, {
        cascade: true
    }),
    __metadata("design:type", package_specification_entity_1.PackageSpecificationEntity)
], HandlingUnitEntity.prototype, "packageSpecification", void 0);
__decorate([
    typeorm_1.ManyToOne(type => packging_material_entity_1.PackgingMaterialEntity, packgingMaterial => packgingMaterial.handlingUnits, {
        cascade: true
    }),
    __metadata("design:type", product_entity_1.ProductEntity)
], HandlingUnitEntity.prototype, "packgingMaterial", void 0);
HandlingUnitEntity = __decorate([
    typeorm_1.Entity('handling-unit')
], HandlingUnitEntity);
exports.HandlingUnitEntity = HandlingUnitEntity;
//# sourceMappingURL=handling-unit.entity.js.map