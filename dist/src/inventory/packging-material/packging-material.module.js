"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackgingMaterialModule = void 0;
const common_1 = require("@nestjs/common");
const packging_material_service_1 = require("./packging-material.service");
const packging_material_controller_1 = require("./packging-material.controller");
const typeorm_1 = require("@nestjs/typeorm");
const packging_material_repository_1 = require("./packging-material.repository");
let PackgingMaterialModule = class PackgingMaterialModule {
};
PackgingMaterialModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([packging_material_repository_1.PackgingMaterialRepository]),
        ],
        providers: [packging_material_service_1.PackgingMaterialService],
        controllers: [packging_material_controller_1.PackgingMaterialController]
    })
], PackgingMaterialModule);
exports.PackgingMaterialModule = PackgingMaterialModule;
//# sourceMappingURL=packging-material.module.js.map