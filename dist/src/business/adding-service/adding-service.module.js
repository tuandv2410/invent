"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddingServiceModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const adding_service_controller_1 = require("./adding-service.controller");
const adding_service_repository_1 = require("./adding-service.repository");
const adding_service_service_1 = require("./adding-service.service");
let AddingServiceModule = class AddingServiceModule {
};
AddingServiceModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([adding_service_repository_1.AddingServiceRepository]),
        ],
        controllers: [adding_service_controller_1.AddingServiceController],
        providers: [adding_service_service_1.AddingServiceService]
    })
], AddingServiceModule);
exports.AddingServiceModule = AddingServiceModule;
//# sourceMappingURL=adding-service.module.js.map