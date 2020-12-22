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
exports.BusinessContractDto = void 0;
const class_validator_1 = require("class-validator");
const nestjsx_automapper_1 = require("nestjsx-automapper");
const automapper_1 = require("@nartc/automapper");
const business_contract_entity_1 = require("../../../../entities/business/business-contract.entity");
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
class ProductContract {
}
__decorate([
    nestjsx_automapper_1.AutoMap(),
    __metadata("design:type", String)
], ProductContract.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    __metadata("design:type", Number)
], ProductContract.prototype, "quantity", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    __metadata("design:type", Number)
], ProductContract.prototype, "totalPrice", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    __metadata("design:type", Number)
], ProductContract.prototype, "discount", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    __metadata("design:type", String)
], ProductContract.prototype, "currency", void 0);
class BusinessContractDto {
}
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], BusinessContractDto.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], BusinessContractDto.prototype, "createDate", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], BusinessContractDto.prototype, "moneyValue", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => Order),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], BusinessContractDto.prototype, "orders", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => ProductContract),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], BusinessContractDto.prototype, "productContracts", void 0);
exports.BusinessContractDto = BusinessContractDto;
automapper_1.Mapper.createMap(business_contract_entity_1.BusinessContractEntity, BusinessContractDto)
    .forMember(d => d.orders, automapper_1.mapFrom(s => s.orders)).forMember(d => d.productContracts, automapper_1.mapFrom(s => s.productContracts));
//# sourceMappingURL=business-contract.dto.js.map