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
exports.CreateBPDto = void 0;
const class_validator_1 = require("class-validator");
const bp_category_enum_1 = require("../../enum/bp-category.enum");
const bp_function_enum_1 = require("../../enum/bp-function.enum");
class CreateBPDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateBPDto.prototype, "fullName", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsIn([bp_category_enum_1.BpCategory.GROUP, bp_category_enum_1.BpCategory.ORGANIZATION, bp_category_enum_1.BpCategory.PERSON]),
    __metadata("design:type", String)
], CreateBPDto.prototype, "category", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsIn([bp_function_enum_1.BpFunction.CUSTOMER, bp_function_enum_1.BpFunction.SUPPLIER]),
    __metadata("design:type", String)
], CreateBPDto.prototype, "functions", void 0);
exports.CreateBPDto = CreateBPDto;
//# sourceMappingURL=create-business-partner.dto.js.map