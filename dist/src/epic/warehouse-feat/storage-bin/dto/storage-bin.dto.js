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
exports.StorageBinDto = void 0;
const nestjsx_automapper_1 = require("nestjsx-automapper");
const automapper_1 = require("@nartc/automapper");
const bin_type_enum_1 = require("../../enum/bin-type.enum");
const storage_bin_entity_1 = require("../../../../entities/warehouse-feat/storage-bin.entity");
const class_validator_1 = require("class-validator");
class Sku {
}
class StorageBinDto {
}
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], StorageBinDto.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], StorageBinDto.prototype, "name", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], StorageBinDto.prototype, "maxWeight", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], StorageBinDto.prototype, "totalCapicity", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], StorageBinDto.prototype, "type", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    __metadata("design:type", Array)
], StorageBinDto.prototype, "skus", void 0);
exports.StorageBinDto = StorageBinDto;
automapper_1.Mapper.createMap(storage_bin_entity_1.StorageBinEntity, StorageBinDto)
    .forMember(d => d.skus, automapper_1.mapFrom(s => s.skus));
//# sourceMappingURL=storage-bin.dto.js.map