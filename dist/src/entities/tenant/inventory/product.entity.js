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
exports.ProductEntity = void 0;
const typeorm_1 = require("typeorm");
const nestjsx_automapper_1 = require("nestjsx-automapper");
const sku_entity_1 = require("./sku.entity");
const handling_unit_entity_1 = require("./handling-unit.entity");
const package_specification_entity_1 = require("./package-specification.entity");
let ProductEntity = class ProductEntity extends typeorm_1.BaseEntity {
};
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], ProductEntity.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], ProductEntity.prototype, "name", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: true,
    }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "weight", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: true,
    }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "volume", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: true,
    }),
    __metadata("design:type", String)
], ProductEntity.prototype, "category", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], ProductEntity.prototype, "unitOfMeasurement", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: true,
    }),
    __metadata("design:type", String)
], ProductEntity.prototype, "color", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => sku_entity_1.SkuEntity),
    typeorm_1.OneToMany(type => sku_entity_1.SkuEntity, sku => sku.product),
    __metadata("design:type", Array)
], ProductEntity.prototype, "skus", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => handling_unit_entity_1.HandlingUnitEntity),
    typeorm_1.OneToMany(type => handling_unit_entity_1.HandlingUnitEntity, handlingUnit => handlingUnit.product),
    __metadata("design:type", Array)
], ProductEntity.prototype, "handlingUnits", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => package_specification_entity_1.PackageSpecificationEntity),
    typeorm_1.OneToMany(type => package_specification_entity_1.PackageSpecificationEntity, packageSpecification => packageSpecification.product),
    __metadata("design:type", Array)
], ProductEntity.prototype, "packageSpecifications", void 0);
ProductEntity = __decorate([
    typeorm_1.Entity('product')
], ProductEntity);
exports.ProductEntity = ProductEntity;
//# sourceMappingURL=product.entity.js.map