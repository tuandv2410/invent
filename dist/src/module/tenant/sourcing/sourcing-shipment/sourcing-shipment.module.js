"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourcingShipmentModule = void 0;
const common_1 = require("@nestjs/common");
const sourcing_shipment_controller_1 = require("./sourcing-shipment.controller");
const sourcing_shipment_service_1 = require("./sourcing-shipment.service");
let SourcingShipmentModule = class SourcingShipmentModule {
};
SourcingShipmentModule = __decorate([
    common_1.Module({
        controllers: [sourcing_shipment_controller_1.SourcingShipmentController],
        providers: [sourcing_shipment_service_1.SourcingShipmentService]
    })
], SourcingShipmentModule);
exports.SourcingShipmentModule = SourcingShipmentModule;
//# sourceMappingURL=sourcing-shipment.module.js.map