"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterGetStorageBinDto = void 0;
const class_validator_1 = require("class-validator");
const bin_type_enum_1 = require("../../../../../enum/bin-type.enum");
class FilterGetStorageBinDto {
}
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterGetStorageBinDto.prototype, "id", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterGetStorageBinDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], FilterGetStorageBinDto.prototype, "maxWeight", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], FilterGetStorageBinDto.prototype, "totalCapicity", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterGetStorageBinDto.prototype, "type", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterGetStorageBinDto.prototype, "storageSestion", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterGetStorageBinDto.prototype, "storageType", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterGetStorageBinDto.prototype, "activityArea", void 0);
exports.FilterGetStorageBinDto = FilterGetStorageBinDto;
//# sourceMappingURL=filter-get-storage-bin.dto.js.map