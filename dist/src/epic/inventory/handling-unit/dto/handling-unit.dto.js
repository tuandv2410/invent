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
exports.HandlingUnitDto = void 0;
const nestjsx_automapper_1 = require("nestjsx-automapper");
const automapper_1 = require("@nartc/automapper");
const hu_type_enum_1 = require("../../enum/hu-type.enum");
const hu_status_enum_1 = require("../../enum/hu-status.enum");
const handling_unit_entity_1 = require("../../../../entities/inventory/handling-unit.entity");
const class_validator_1 = require("class-validator");
class Sku {
}
class HandlingUnitDto {
}
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], HandlingUnitDto.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], HandlingUnitDto.prototype, "type", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], HandlingUnitDto.prototype, "parentId", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], HandlingUnitDto.prototype, "dimension", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], HandlingUnitDto.prototype, "weight", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], HandlingUnitDto.prototype, "volume", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], HandlingUnitDto.prototype, "totalPrice", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], HandlingUnitDto.prototype, "currency", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], HandlingUnitDto.prototype, "quantity", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], HandlingUnitDto.prototype, "status", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], HandlingUnitDto.prototype, "skus", void 0);
exports.HandlingUnitDto = HandlingUnitDto;
automapper_1.Mapper.createMap(handling_unit_entity_1.HandlingUnitEntity, HandlingUnitDto)
    .forMember(d => d.skus, automapper_1.mapFrom(s => s.skus));
//# sourceMappingURL=handling-unit.dto.js.map