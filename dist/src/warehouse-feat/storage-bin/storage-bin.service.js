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
exports.StorageBinService = void 0;
const common_1 = require("@nestjs/common");
const base_service_1 = require("../../base/base.service");
const storage_bin_entity_1 = require("../../entities/warehouse-feat/storage-bin.entity");
const storage_bin_repository_1 = require("./storage-bin.repository");
let StorageBinService = class StorageBinService extends base_service_1.BaseService {
    constructor(repository) {
        super(repository);
    }
};
StorageBinService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [storage_bin_repository_1.StorageBinRepository])
], StorageBinService);
exports.StorageBinService = StorageBinService;
//# sourceMappingURL=storage-bin.service.js.map