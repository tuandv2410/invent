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
exports.ActivityAreaEntity = void 0;
const typeorm_1 = require("typeorm");
const nestjsx_automapper_1 = require("nestjsx-automapper");
const activity_area_enum_1 = require("../../epic/warehouse-feat/enum/activity-area.enum");
const warehouse_entity_1 = require("./warehouse.entity");
const storage_bin_entity_1 = require("./storage-bin.entity");
let ActivityAreaEntity = class ActivityAreaEntity extends typeorm_1.BaseEntity {
};
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], ActivityAreaEntity.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], ActivityAreaEntity.prototype, "name", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], ActivityAreaEntity.prototype, "activity", void 0);
__decorate([
    typeorm_1.ManyToOne(type => warehouse_entity_1.WarehouseEntity, warehouse => warehouse.activityAreas, {
        cascade: true
    }),
    __metadata("design:type", warehouse_entity_1.WarehouseEntity)
], ActivityAreaEntity.prototype, "warehouse", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => storage_bin_entity_1.StorageBinEntity),
    typeorm_1.OneToMany(type => storage_bin_entity_1.StorageBinEntity, storageBin => storageBin.activityArea),
    __metadata("design:type", Array)
], ActivityAreaEntity.prototype, "storageBins", void 0);
ActivityAreaEntity = __decorate([
    typeorm_1.Entity('activity-area')
], ActivityAreaEntity);
exports.ActivityAreaEntity = ActivityAreaEntity;
//# sourceMappingURL=activity-area.entity.js.map