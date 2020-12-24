"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageSectionModule = void 0;
const common_1 = require("@nestjs/common");
const storage_section_controller_1 = require("./storage-section.controller");
const storage_section_repository_1 = require("./storage-section.repository");
const storage_section_service_1 = require("./storage-section.service");
let StorageSectionModule = class StorageSectionModule {
};
StorageSectionModule = __decorate([
    common_1.Module({
        controllers: [storage_section_controller_1.StorageSectionController],
        providers: [storage_section_service_1.StorageSectionService, storage_section_repository_1.StorageSectionRepository]
    })
], StorageSectionModule);
exports.StorageSectionModule = StorageSectionModule;
//# sourceMappingURL=storage-section.module.js.map