"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellingOrderModule = void 0;
const common_1 = require("@nestjs/common");
const selling_order_controller_1 = require("./selling-order.controller");
const selling_order_service_1 = require("./selling-order.service");
let SellingOrderModule = class SellingOrderModule {
};
SellingOrderModule = __decorate([
    common_1.Module({
        controllers: [selling_order_controller_1.SellingOrderController],
        providers: [selling_order_service_1.SellingOrderService]
    })
], SellingOrderModule);
exports.SellingOrderModule = SellingOrderModule;
//# sourceMappingURL=selling-order.module.js.map