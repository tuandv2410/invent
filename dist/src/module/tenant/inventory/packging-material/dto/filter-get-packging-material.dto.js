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
exports.FilterGetPackgingMaterialDto = void 0;
const class_validator_1 = require("class-validator");
const pm_category_enum_1 = require("../../../../../enum/pm-category.enum");
const pm_type_enum_1 = require("../../../../../enum/pm-type.enum");
class FilterGetPackgingMaterialDto {
}
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterGetPackgingMaterialDto.prototype, "id", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterGetPackgingMaterialDto.prototype, "type", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterGetPackgingMaterialDto.prototype, "category", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], FilterGetPackgingMaterialDto.prototype, "tareWeight", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], FilterGetPackgingMaterialDto.prototype, "tareVolume", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], FilterGetPackgingMaterialDto.prototype, "capacities", void 0);
exports.FilterGetPackgingMaterialDto = FilterGetPackgingMaterialDto;
//# sourceMappingURL=filter-get-packging-material.dto.js.map