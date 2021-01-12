"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSourcingContractModule = void 0;
const common_1 = require("@nestjs/common");
const product_sourcing_contract_controller_1 = require("./product-sourcing-contract.controller");
const product_sourcing_contract_service_1 = require("./product-sourcing-contract.service");
let ProductSourcingContractModule = class ProductSourcingContractModule {
};
ProductSourcingContractModule = __decorate([
    common_1.Module({
        controllers: [product_sourcing_contract_controller_1.ProductSourcingContractController],
        providers: [product_sourcing_contract_service_1.ProductSourcingContractService]
    })
], ProductSourcingContractModule);
exports.ProductSourcingContractModule = ProductSourcingContractModule;
//# sourceMappingURL=product-sourcing-contract.module.js.map