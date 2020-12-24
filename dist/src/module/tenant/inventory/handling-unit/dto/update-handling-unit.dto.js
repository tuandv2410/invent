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
exports.UpdateHandlingUnitDto = void 0;
const class_validator_1 = require("class-validator");
const hu_status_enum_1 = require("../../enum/hu-status.enum");
const hu_type_enum_1 = require("../../enum/hu-type.enum");
class UpdateHandlingUnitDto {
}
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], UpdateHandlingUnitDto.prototype, "type", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], UpdateHandlingUnitDto.prototype, "parentId", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], UpdateHandlingUnitDto.prototype, "dimension", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], UpdateHandlingUnitDto.prototype, "weight", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], UpdateHandlingUnitDto.prototype, "volume", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], UpdateHandlingUnitDto.prototype, "totalPrice", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], UpdateHandlingUnitDto.prototype, "currency", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], UpdateHandlingUnitDto.prototype, "quantity", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], UpdateHandlingUnitDto.prototype, "status", void 0);
exports.UpdateHandlingUnitDto = UpdateHandlingUnitDto;
//# sourceMappingURL=update-handling-unit.dto.js.map