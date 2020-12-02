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
exports.BusinessPartnerEntity = void 0;
const typeorm_1 = require("typeorm");
const nestjsx_automapper_1 = require("nestjsx-automapper");
const bp_category_enum_1 = require("../../business/enum/bp-category.enum");
const bp_function_enum_1 = require("../../business/enum/bp-function.enum");
const bp_status_enum_1 = require("../../business/enum/bp-status.enum");
let BusinessPartnerEntity = class BusinessPartnerEntity extends typeorm_1.BaseEntity {
};
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], BusinessPartnerEntity.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        type: 'varchar',
        nullable: false,
        unique: true
    }),
    __metadata("design:type", String)
], BusinessPartnerEntity.prototype, "fullName", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        type: 'varchar',
        nullable: false,
    }),
    __metadata("design:type", String)
], BusinessPartnerEntity.prototype, "category", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        type: 'varchar',
        nullable: false,
    }),
    __metadata("design:type", String)
], BusinessPartnerEntity.prototype, "function", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        type: 'varchar',
        nullable: false,
    }),
    __metadata("design:type", String)
], BusinessPartnerEntity.prototype, "status", void 0);
BusinessPartnerEntity = __decorate([
    typeorm_1.Entity('business-partner')
], BusinessPartnerEntity);
exports.BusinessPartnerEntity = BusinessPartnerEntity;
//# sourceMappingURL=business-partner.entity.js.map