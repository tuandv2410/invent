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
exports.AddingServiceDto = void 0;
const nestjsx_automapper_1 = require("nestjsx-automapper");
const automapper_1 = require("@nartc/automapper");
const class_validator_1 = require("class-validator");
const adding_service_entity_1 = require("../../../../entities/business/adding-service.entity");
const adding_service_enum_1 = require("../../enum/adding-service.enum");
class Order {
}
__decorate([
    nestjsx_automapper_1.AutoMap(),
    __metadata("design:type", String)
], Order.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    __metadata("design:type", String)
], Order.prototype, "createDate", void 0);
class AddingServiceDto {
}
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], AddingServiceDto.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], AddingServiceDto.prototype, "price", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], AddingServiceDto.prototype, "description", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], AddingServiceDto.prototype, "type", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => Order),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], AddingServiceDto.prototype, "orders", void 0);
exports.AddingServiceDto = AddingServiceDto;
automapper_1.Mapper.createMap(adding_service_entity_1.AddingServiceEntity, AddingServiceDto)
    .forMember(d => d.orders, automapper_1.mapFrom(s => s.orders));
//# sourceMappingURL=adding-service.dto.js.map