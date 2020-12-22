"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandlingUnitModule = void 0;
const common_1 = require("@nestjs/common");
const handling_unit_service_1 = require("./handling-unit.service");
const handling_unit_controller_1 = require("./handling-unit.controller");
const typeorm_1 = require("@nestjs/typeorm");
const handling_unit_repository_1 = require("./handling-unit.repository");
let HandlingUnitModule = class HandlingUnitModule {
};
HandlingUnitModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([handling_unit_repository_1.HandlingUnitRepository]),
        ],
        providers: [handling_unit_service_1.HandlingUnitService],
        controllers: [handling_unit_controller_1.HandlingUnitController],
        exports: [handling_unit_service_1.HandlingUnitService]
    })
], HandlingUnitModule);
exports.HandlingUnitModule = HandlingUnitModule;
//# sourceMappingURL=handling-unit.module.js.map