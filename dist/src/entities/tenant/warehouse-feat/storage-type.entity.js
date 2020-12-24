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
exports.StorageTypeEntity = void 0;
const typeorm_1 = require("typeorm");
const nestjsx_automapper_1 = require("nestjsx-automapper");
const sto_type_enum_1 = require("../../../module/tenant/warehouse-feat/enum/sto-type.enum");
const warehouse_entity_1 = require("./warehouse.entity");
const storage_section_entity_1 = require("./storage-section.entity");
const storage_bin_entity_1 = require("./storage-bin.entity");
let StorageTypeEntity = class StorageTypeEntity extends typeorm_1.BaseEntity {
};
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], StorageTypeEntity.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], StorageTypeEntity.prototype, "name", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], StorageTypeEntity.prototype, "areaType", void 0);
__decorate([
    typeorm_1.ManyToOne(type => warehouse_entity_1.WarehouseEntity, warehouse => warehouse.storageTypes, {
        cascade: true
    }),
    __metadata("design:type", warehouse_entity_1.WarehouseEntity)
], StorageTypeEntity.prototype, "warehouse", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => storage_section_entity_1.StorageSectionEntity),
    typeorm_1.OneToMany(type => storage_section_entity_1.StorageSectionEntity, storageSection => storageSection.storageType),
    __metadata("design:type", Array)
], StorageTypeEntity.prototype, "storageSections", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => storage_bin_entity_1.StorageBinEntity),
    typeorm_1.OneToMany(type => storage_bin_entity_1.StorageBinEntity, storageBin => storageBin.storageType),
    __metadata("design:type", Array)
], StorageTypeEntity.prototype, "storageBins", void 0);
StorageTypeEntity = __decorate([
    typeorm_1.Entity('storage-type')
], StorageTypeEntity);
exports.StorageTypeEntity = StorageTypeEntity;
//# sourceMappingURL=storage-type.entity.js.map