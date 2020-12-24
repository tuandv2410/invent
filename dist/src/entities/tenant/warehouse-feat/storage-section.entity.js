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
exports.StorageSectionEntity = void 0;
const typeorm_1 = require("typeorm");
const nestjsx_automapper_1 = require("nestjsx-automapper");
const storage_type_entity_1 = require("./storage-type.entity");
const storage_bin_entity_1 = require("./storage-bin.entity");
let StorageSectionEntity = class StorageSectionEntity extends typeorm_1.BaseEntity {
};
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], StorageSectionEntity.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], StorageSectionEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.ManyToOne(type => storage_type_entity_1.StorageTypeEntity, storageType => storageType.storageSections, {
        cascade: true
    }),
    __metadata("design:type", storage_type_entity_1.StorageTypeEntity)
], StorageSectionEntity.prototype, "storageType", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => storage_bin_entity_1.StorageBinEntity),
    typeorm_1.OneToMany(type => storage_bin_entity_1.StorageBinEntity, storageBin => storageBin.storageSection),
    __metadata("design:type", Array)
], StorageSectionEntity.prototype, "storageBins", void 0);
StorageSectionEntity = __decorate([
    typeorm_1.Entity('storage-section')
], StorageSectionEntity);
exports.StorageSectionEntity = StorageSectionEntity;
//# sourceMappingURL=storage-section.entity.js.map