"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductContractModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_contract_controller_1 = require("./product-contract.controller");
const product_contract_repository_1 = require("./product-contract.repository");
const product_contract_service_1 = require("./product-contract.service");
let ProductContractModule = class ProductContractModule {
};
ProductContractModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([product_contract_repository_1.ProductContractRepository]),
        ],
        controllers: [product_contract_controller_1.ProductContractController],
        providers: [product_contract_service_1.ProductContractService],
        exports: [product_contract_service_1.ProductContractService]
    })
], ProductContractModule);
exports.ProductContractModule = ProductContractModule;
//# sourceMappingURL=product-contract.module.js.map