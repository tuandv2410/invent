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
exports.CreateHandlingUnitDto = void 0;
const class_validator_1 = require("class-validator");
const hu_status_enum_1 = require("../../enum/hu-status.enum");
const hu_type_enum_1 = require("../../enum/hu-type.enum");
class CreateHandlingUnitDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateHandlingUnitDto.prototype, "type", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateHandlingUnitDto.prototype, "parentId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], CreateHandlingUnitDto.prototype, "dimension", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], CreateHandlingUnitDto.prototype, "weight", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], CreateHandlingUnitDto.prototype, "volume", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], CreateHandlingUnitDto.prototype, "totalPrice", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateHandlingUnitDto.prototype, "currency", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], CreateHandlingUnitDto.prototype, "quantity", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateHandlingUnitDto.prototype, "status", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateHandlingUnitDto.prototype, "product", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateHandlingUnitDto.prototype, "packageSpecification", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateHandlingUnitDto.prototype, "packgingMaterial", void 0);
exports.CreateHandlingUnitDto = CreateHandlingUnitDto;
//# sourceMappingURL=create-handling-unit.dto.js.map