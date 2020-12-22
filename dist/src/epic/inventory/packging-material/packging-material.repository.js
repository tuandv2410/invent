"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackgingMaterialRepository = void 0;
const packging_material_entity_1 = require("../../../entities/inventory/packging-material.entity");
const typeorm_1 = require("typeorm");
let PackgingMaterialRepository = class PackgingMaterialRepository extends typeorm_1.Repository {
};
PackgingMaterialRepository = __decorate([
    typeorm_1.EntityRepository(packging_material_entity_1.PackgingMaterialEntity)
], PackgingMaterialRepository);
exports.PackgingMaterialRepository = PackgingMaterialRepository;
//# sourceMappingURL=packging-material.repository.js.map