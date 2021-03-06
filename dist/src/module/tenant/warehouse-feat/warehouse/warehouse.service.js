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
exports.WarehouseService = void 0;
const common_1 = require("@nestjs/common");
const base_service_1 = require("../../../../base/base.service");
const warehouse_entity_1 = require("../../../../entities/tenant/warehouse-feat/warehouse.entity");
const warehouse_repository_1 = require("./warehouse.repository");
let WarehouseService = class WarehouseService extends base_service_1.BaseService {
    constructor(repository, connection) {
        super(repository);
        this.connection = connection;
        this.repository = this.connection.getRepository(warehouse_entity_1.WarehouseEntity);
    }
};
WarehouseService = __decorate([
    common_1.Injectable(),
    __param(1, common_1.Inject('CONNECTION')),
    __metadata("design:paramtypes", [warehouse_repository_1.WarehouseRepository, Object])
], WarehouseService);
exports.WarehouseService = WarehouseService;
//# sourceMappingURL=warehouse.service.js.map