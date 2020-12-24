"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageSpecificationModule = void 0;
const common_1 = require("@nestjs/common");
const package_specification_service_1 = require("./package-specification.service");
const package_specification_controller_1 = require("./package-specification.controller");
const package_specification_repository_1 = require("./package-specification.repository");
let PackageSpecificationModule = class PackageSpecificationModule {
};
PackageSpecificationModule = __decorate([
    common_1.Module({
        providers: [package_specification_service_1.PackageSpecificationService, package_specification_repository_1.PackageSpecificationRepository],
        controllers: [package_specification_controller_1.PackageSpecificationController],
        exports: [package_specification_service_1.PackageSpecificationService]
    })
], PackageSpecificationModule);
exports.PackageSpecificationModule = PackageSpecificationModule;
//# sourceMappingURL=package-specification.module.js.map