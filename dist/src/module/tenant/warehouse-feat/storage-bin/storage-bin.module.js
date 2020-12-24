"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageBinModule = void 0;
const common_1 = require("@nestjs/common");
const storage_bin_controller_1 = require("./storage-bin.controller");
const storage_bin_repository_1 = require("./storage-bin.repository");
const storage_bin_service_1 = require("./storage-bin.service");
let StorageBinModule = class StorageBinModule {
};
StorageBinModule = __decorate([
    common_1.Module({
        controllers: [storage_bin_controller_1.StorageBinController],
        providers: [storage_bin_service_1.StorageBinService, storage_bin_repository_1.StorageBinRepository]
    })
], StorageBinModule);
exports.StorageBinModule = StorageBinModule;
//# sourceMappingURL=storage-bin.module.js.map