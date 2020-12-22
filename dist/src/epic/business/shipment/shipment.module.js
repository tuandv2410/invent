"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const shipment_controller_1 = require("./shipment.controller");
const shipment_repository_1 = require("./shipment.repository");
const shipment_service_1 = require("./shipment.service");
let ShipmentModule = class ShipmentModule {
};
ShipmentModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([shipment_repository_1.ShipmentRepository]),
        ],
        controllers: [shipment_controller_1.ShipmentController],
        providers: [shipment_service_1.ShipmentService],
        exports: [shipment_service_1.ShipmentService]
    })
], ShipmentModule);
exports.ShipmentModule = ShipmentModule;
//# sourceMappingURL=shipment.module.js.map