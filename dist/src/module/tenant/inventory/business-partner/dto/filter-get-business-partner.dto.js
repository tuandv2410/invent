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
exports.FilterGetBusinessPartnerDto = void 0;
const class_validator_1 = require("class-validator");
const bp_category_enum_1 = require("../../../../../enum/bp-category.enum");
const bp_function_enum_1 = require("../../../../../enum/bp-function.enum");
const bp_status_enum_1 = require("../../../../../enum/bp-status.enum");
class FilterGetBusinessPartnerDto {
}
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterGetBusinessPartnerDto.prototype, "id", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterGetBusinessPartnerDto.prototype, "fullName", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterGetBusinessPartnerDto.prototype, "address", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterGetBusinessPartnerDto.prototype, "taxInfo", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterGetBusinessPartnerDto.prototype, "phone", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterGetBusinessPartnerDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], FilterGetBusinessPartnerDto.prototype, "discount", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterGetBusinessPartnerDto.prototype, "category", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterGetBusinessPartnerDto.prototype, "function", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterGetBusinessPartnerDto.prototype, "status", void 0);
exports.FilterGetBusinessPartnerDto = FilterGetBusinessPartnerDto;
//# sourceMappingURL=filter-get-business-partner.dto.js.map