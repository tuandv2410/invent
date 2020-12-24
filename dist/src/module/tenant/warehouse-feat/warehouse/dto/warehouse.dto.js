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
exports.WarehouseDto = void 0;
const nestjsx_automapper_1 = require("nestjsx-automapper");
const automapper_1 = require("@nartc/automapper");
const warehouse_entity_1 = require("../../../../../entities/tenant/warehouse-feat/warehouse.entity");
const sto_type_enum_1 = require("../../enum/sto-type.enum");
const activity_area_enum_1 = require("../../enum/activity-area.enum");
const class_validator_1 = require("class-validator");
class StorageType {
}
class AcivityArea {
}
class WarehouseDto {
}
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], WarehouseDto.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], WarehouseDto.prototype, "location", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], WarehouseDto.prototype, "name", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], WarehouseDto.prototype, "storageTypes", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], WarehouseDto.prototype, "activityAreas", void 0);
exports.WarehouseDto = WarehouseDto;
automapper_1.Mapper.createMap(warehouse_entity_1.WarehouseEntity, WarehouseDto)
    .forMember(d => d.storageTypes, automapper_1.mapFrom(s => s.storageTypes)).forMember(d => d.activityAreas, automapper_1.mapFrom(s => s.activityAreas));
//# sourceMappingURL=warehouse.dto.js.map