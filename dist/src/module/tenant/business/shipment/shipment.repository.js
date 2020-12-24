"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentRepository = void 0;
const product_order_entity_1 = require("../../../../entities/tenant/business/product-order.entity");
const shipment_entity_1 = require("../../../../entities/tenant/business/shipment.entity");
const typeorm_1 = require("typeorm");
let ShipmentRepository = class ShipmentRepository extends typeorm_1.Repository {
};
ShipmentRepository = __decorate([
    typeorm_1.EntityRepository(shipment_entity_1.ShipmentEntity)
], ShipmentRepository);
exports.ShipmentRepository = ShipmentRepository;
//# sourceMappingURL=shipment.repository.js.map