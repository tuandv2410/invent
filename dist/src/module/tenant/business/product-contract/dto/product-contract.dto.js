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
exports.ProductContractDto = void 0;
const nestjsx_automapper_1 = require("nestjsx-automapper");
const automapper_1 = require("@nartc/automapper");
const product_contract_entity_1 = require("../../../../../entities/tenant/business/product-contract.entity");
const class_validator_1 = require("class-validator");
class BusinessContract {
}
class Sku {
}
class ProductContractDto {
}
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ProductContractDto.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Sku)
], ProductContractDto.prototype, "sku", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsOptional(),
    __metadata("design:type", BusinessContract)
], ProductContractDto.prototype, "businessContract", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], ProductContractDto.prototype, "quantity", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    nestjsx_automapper_1.AutoMap(),
    __metadata("design:type", Number)
], ProductContractDto.prototype, "totalPrice", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    nestjsx_automapper_1.AutoMap(),
    __metadata("design:type", Number)
], ProductContractDto.prototype, "discount", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    nestjsx_automapper_1.AutoMap(),
    __metadata("design:type", String)
], ProductContractDto.prototype, "currency", void 0);
exports.ProductContractDto = ProductContractDto;
automapper_1.Mapper.createMap(product_contract_entity_1.ProductContractEntity, ProductContractDto)
    .forMember(d => d.businessContract, automapper_1.mapFrom(s => s.businessContract)).forMember(d => d.sku, automapper_1.mapFrom(s => s.sku));
//# sourceMappingURL=product-contract.dto.js.map