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
exports.StorageBinEntity = void 0;
const typeorm_1 = require("typeorm");
const nestjsx_automapper_1 = require("nestjsx-automapper");
const bin_type_enum_1 = require("../../../enum/bin-type.enum");
const storage_type_entity_1 = require("./storage-type.entity");
const storage_section_entity_1 = require("./storage-section.entity");
const activity_area_entity_1 = require("./activity-area.entity");
const sku_entity_1 = require("../inventory/sku.entity");
let StorageBinEntity = class StorageBinEntity extends typeorm_1.BaseEntity {
};
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], StorageBinEntity.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], StorageBinEntity.prototype, "name", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", Number)
], StorageBinEntity.prototype, "maxWeight", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", Number)
], StorageBinEntity.prototype, "totalCapicity", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], StorageBinEntity.prototype, "type", void 0);
__decorate([
    typeorm_1.ManyToOne(type => storage_type_entity_1.StorageTypeEntity, storageType => storageType.storageBins, {
        cascade: true
    }),
    __metadata("design:type", storage_type_entity_1.StorageTypeEntity)
], StorageBinEntity.prototype, "storageType", void 0);
__decorate([
    typeorm_1.ManyToOne(type => storage_section_entity_1.StorageSectionEntity, storageSection => storageSection.storageBins, {
        cascade: true
    }),
    __metadata("design:type", storage_section_entity_1.StorageSectionEntity)
], StorageBinEntity.prototype, "storageSection", void 0);
__decorate([
    typeorm_1.ManyToOne(type => activity_area_entity_1.ActivityAreaEntity, activityArea => activityArea.storageBins, {
        cascade: true
    }),
    __metadata("design:type", activity_area_entity_1.ActivityAreaEntity)
], StorageBinEntity.prototype, "activityArea", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => sku_entity_1.SkuEntity),
    typeorm_1.OneToMany(type => sku_entity_1.SkuEntity, sku => sku.storageBin),
    __metadata("design:type", Array)
], StorageBinEntity.prototype, "skus", void 0);
StorageBinEntity = __decorate([
    typeorm_1.Entity('storage-bin')
], StorageBinEntity);
exports.StorageBinEntity = StorageBinEntity;
//# sourceMappingURL=storage-bin.entity.js.map