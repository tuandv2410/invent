"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageTypeRepository = void 0;
const storage_type_entity_1 = require("../../../entities/warehouse-feat/storage-type.entity");
const typeorm_1 = require("typeorm");
let StorageTypeRepository = class StorageTypeRepository extends typeorm_1.Repository {
};
StorageTypeRepository = __decorate([
    typeorm_1.EntityRepository(storage_type_entity_1.StorageTypeEntity)
], StorageTypeRepository);
exports.StorageTypeRepository = StorageTypeRepository;
//# sourceMappingURL=storage-type.repository.js.map