"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkuModule = void 0;
const common_1 = require("@nestjs/common");
const sku_service_1 = require("./sku.service");
const sku_controller_1 = require("./sku.controller");
const sku_repository_1 = require("./sku.repository");
let SkuModule = class SkuModule {
};
SkuModule = __decorate([
    common_1.Module({
        providers: [sku_service_1.SkuService, sku_repository_1.SkuRepository],
        controllers: [sku_controller_1.SkuController],
        exports: [sku_service_1.SkuService]
    })
], SkuModule);
exports.SkuModule = SkuModule;
//# sourceMappingURL=sku.module.js.map