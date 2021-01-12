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
exports.ProductDto = void 0;
const nestjsx_automapper_1 = require("nestjsx-automapper");
const automapper_1 = require("@nartc/automapper");
const product_entity_1 = require("../../../../../entities/tenant/inventory/product.entity");
const class_validator_1 = require("class-validator");
const hu_status_enum_1 = require("../../../../../enum/hu-status.enum");
const hu_type_enum_1 = require("../../../../../enum/hu-type.enum");
class HandlingUnit {
}
class PackageSpecification {
}
class ProductDto {
}
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ProductDto.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ProductDto.prototype, "name", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], ProductDto.prototype, "weight", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], ProductDto.prototype, "volume", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], ProductDto.prototype, "category", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ProductDto.prototype, "unitOfMeasurement", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], ProductDto.prototype, "color", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], ProductDto.prototype, "handlingUnits", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], ProductDto.prototype, "packageSpecifications", void 0);
exports.ProductDto = ProductDto;
automapper_1.Mapper.createMap(product_entity_1.ProductEntity, ProductDto)
    .forMember(d => d.handlingUnits, automapper_1.mapFrom(s => s.handlingUnits)).forMember(d => d.packageSpecifications, automapper_1.mapFrom(s => s.packageSpecifications));
//# sourceMappingURL=product.dto.js.map