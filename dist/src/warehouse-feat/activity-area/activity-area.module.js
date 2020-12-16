"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityAreaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const activity_area_controller_1 = require("./activity-area.controller");
const activity_area_repository_1 = require("./activity-area.repository");
const activity_area_service_1 = require("./activity-area.service");
let ActivityAreaModule = class ActivityAreaModule {
};
ActivityAreaModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([activity_area_repository_1.ActivityAreaRepository]),
        ],
        controllers: [activity_area_controller_1.ActivityAreaController],
        providers: [activity_area_service_1.ActivityAreaService]
    })
], ActivityAreaModule);
exports.ActivityAreaModule = ActivityAreaModule;
//# sourceMappingURL=activity-area.module.js.map