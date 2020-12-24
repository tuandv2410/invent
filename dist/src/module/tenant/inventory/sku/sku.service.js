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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkuService = void 0;
const common_1 = require("@nestjs/common");
const base_service_1 = require("../../../../base/base.service");
const sku_entity_1 = require("../../../../entities/tenant/inventory/sku.entity");
const sku_repository_1 = require("./sku.repository");
let SkuService = class SkuService extends base_service_1.BaseService {
    constructor(repository, connection) {
        super(repository);
        this.connection = connection;
        this.repository = this.connection.getRepository(sku_entity_1.SkuEntity);
    }
};
SkuService = __decorate([
    common_1.Injectable(),
    __param(1, common_1.Inject('CONNECTION')),
    __metadata("design:paramtypes", [sku_repository_1.SkuRepository, Object])
], SkuService);
exports.SkuService = SkuService;
//# sourceMappingURL=sku.service.js.map