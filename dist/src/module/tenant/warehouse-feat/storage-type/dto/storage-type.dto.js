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
exports.StorageTypeDto = void 0;
const nestjsx_automapper_1 = require("nestjsx-automapper");
const automapper_1 = require("@nartc/automapper");
const storage_type_entity_1 = require("../../../../../entities/tenant/warehouse-feat/storage-type.entity");
const sto_type_enum_1 = require("../../../../../enum/sto-type.enum");
const bin_type_enum_1 = require("../../../../../enum/bin-type.enum");
class StorageBin {
}
class StorageSection {
}
class StorageTypeDto {
}
__decorate([
    nestjsx_automapper_1.AutoMap(),
    __metadata("design:type", String)
], StorageTypeDto.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    __metadata("design:type", String)
], StorageTypeDto.prototype, "areaType", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    __metadata("design:type", String)
], StorageTypeDto.prototype, "name", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    __metadata("design:type", Array)
], StorageTypeDto.prototype, "storageSections", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    __metadata("design:type", Array)
], StorageTypeDto.prototype, "storageBins", void 0);
exports.StorageTypeDto = StorageTypeDto;
automapper_1.Mapper.createMap(storage_type_entity_1.StorageTypeEntity, StorageTypeDto)
    .forMember(d => d.storageBins, automapper_1.mapFrom(s => s.storageBins)).forMember(d => d.storageSections, automapper_1.mapFrom(s => s.storageSections));
//# sourceMappingURL=storage-type.dto.js.map