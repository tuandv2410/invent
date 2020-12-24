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
exports.WarehouseEntity = void 0;
const typeorm_1 = require("typeorm");
const nestjsx_automapper_1 = require("nestjsx-automapper");
const storage_type_entity_1 = require("./storage-type.entity");
const activity_area_entity_1 = require("./activity-area.entity");
let WarehouseEntity = class WarehouseEntity extends typeorm_1.BaseEntity {
};
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], WarehouseEntity.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], WarehouseEntity.prototype, "name", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        type: 'varchar',
        nullable: false,
    }),
    __metadata("design:type", String)
], WarehouseEntity.prototype, "location", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => storage_type_entity_1.StorageTypeEntity),
    typeorm_1.OneToMany(type => storage_type_entity_1.StorageTypeEntity, storageType => storageType.warehouse),
    __metadata("design:type", Array)
], WarehouseEntity.prototype, "storageTypes", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => activity_area_entity_1.ActivityAreaEntity),
    typeorm_1.OneToMany(type => activity_area_entity_1.ActivityAreaEntity, activityArea => activityArea.warehouse),
    __metadata("design:type", Array)
], WarehouseEntity.prototype, "activityAreas", void 0);
WarehouseEntity = __decorate([
    typeorm_1.Entity('warehouse')
], WarehouseEntity);
exports.WarehouseEntity = WarehouseEntity;
//# sourceMappingURL=warehouse.entity.js.map