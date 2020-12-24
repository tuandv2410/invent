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
exports.WarehouseController = void 0;
const delete_result_interface_1 = require("../../../../interfaces/delete-result.interface");
const common_1 = require("@nestjs/common");
const automapper_1 = require("@nartc/automapper");
const uuid_1 = require("uuid");
const warehouse_service_1 = require("./warehouse.service");
const filter_get_warehouse_dto_1 = require("./dto/filter-get-warehouse.dto");
const warehouse_dto_1 = require("./dto/warehouse.dto");
const create_warehouse_dto_1 = require("./dto/create-warehouse.dto");
const update_warehouse_dto_1 = require("./dto/update-warehouse.dto");
let WarehouseController = class WarehouseController {
    constructor(service) {
        this.service = service;
    }
    async get(filterDto) {
        const result = await this.service.get(filterDto);
        return automapper_1.Mapper.mapArray(result, warehouse_dto_1.WarehouseDto);
    }
    async getWithRelations(filterDto) {
        const result = await this.service.getWithRelations(filterDto);
        return automapper_1.Mapper.mapArray(result, warehouse_dto_1.WarehouseDto);
    }
    async create(userData) {
        const id = uuid_1.v4();
        const data = Object.assign({ id }, userData);
        return await this.service.store(data);
    }
    async update(id, userData) {
        const result = await this.service.update(id, userData);
        return automapper_1.Mapper.map(result, warehouse_dto_1.WarehouseDto);
    }
    async destroy(id) {
        return this.service.delete(id);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_get_warehouse_dto_1.FilterGetWarehouseDto]),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "get", null);
__decorate([
    common_1.Get('/getWithRelations'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_get_warehouse_dto_1.FilterGetWarehouseDto]),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "getWithRelations", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_warehouse_dto_1.CreateWarehouseDto]),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "create", null);
__decorate([
    common_1.Put('/:id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_warehouse_dto_1.UpdateWarehouseDto]),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "update", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "destroy", null);
WarehouseController = __decorate([
    common_1.Controller('warehouse'),
    __metadata("design:paramtypes", [warehouse_service_1.WarehouseService])
], WarehouseController);
exports.WarehouseController = WarehouseController;
//# sourceMappingURL=warehouse.controller.js.map