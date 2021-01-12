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
exports.StorageSectionDto = void 0;
const nestjsx_automapper_1 = require("nestjsx-automapper");
const automapper_1 = require("@nartc/automapper");
const storage_section_entity_1 = require("../../../../../entities/tenant/warehouse-feat/storage-section.entity");
const bin_type_enum_1 = require("../../../../../enum/bin-type.enum");
const class_validator_1 = require("class-validator");
class StorageBin {
}
class StorageSectionDto {
}
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], StorageSectionDto.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], StorageSectionDto.prototype, "name", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    __metadata("design:type", Array)
], StorageSectionDto.prototype, "storageBins", void 0);
exports.StorageSectionDto = StorageSectionDto;
automapper_1.Mapper.createMap(storage_section_entity_1.StorageSectionEntity, StorageSectionDto)
    .forMember(d => d.storageBins, automapper_1.mapFrom(s => s.storageBins));
//# sourceMappingURL=storage-section.dto.js.map