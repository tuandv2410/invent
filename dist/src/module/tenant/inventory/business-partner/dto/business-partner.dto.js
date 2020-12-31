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
exports.BusinessPartnerDto = void 0;
const nestjsx_automapper_1 = require("nestjsx-automapper");
const automapper_1 = require("@nartc/automapper");
const bp_category_enum_1 = require("../../../business/enum/bp-category.enum");
const bp_function_enum_1 = require("../../../business/enum/bp-function.enum");
const bp_status_enum_1 = require("../../../business/enum/bp-status.enum");
const business_partner_entity_1 = require("../../../../../entities/tenant/inventory/business-partner.entity");
const class_validator_1 = require("class-validator");
class BusinessContract {
}
class BusinessPartnerDto {
}
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], BusinessPartnerDto.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], BusinessPartnerDto.prototype, "fullName", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], BusinessPartnerDto.prototype, "address", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], BusinessPartnerDto.prototype, "taxInfo", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], BusinessPartnerDto.prototype, "phone", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], BusinessPartnerDto.prototype, "email", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], BusinessPartnerDto.prototype, "discount", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], BusinessPartnerDto.prototype, "category", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], BusinessPartnerDto.prototype, "function", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], BusinessPartnerDto.prototype, "status", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => BusinessContract),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], BusinessPartnerDto.prototype, "businessContracts", void 0);
exports.BusinessPartnerDto = BusinessPartnerDto;
automapper_1.Mapper.createMap(business_partner_entity_1.BusinessPartnerEntity, BusinessPartnerDto)
    .forMember(d => d.businessContracts, automapper_1.mapFrom(s => s.businessContracts));
//# sourceMappingURL=business-partner.dto.js.map