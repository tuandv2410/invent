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
exports.CommissionEntity = void 0;
const typeorm_1 = require("typeorm");
const nestjsx_automapper_1 = require("nestjsx-automapper");
const period_enum_1 = require("../../../enum/period.enum");
const selling_business_contract_entity_1 = require("./selling-business-contract.entity");
let CommissionEntity = class CommissionEntity extends typeorm_1.BaseEntity {
};
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], CommissionEntity.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], CommissionEntity.prototype, "startDate", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], CommissionEntity.prototype, "endDate", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], CommissionEntity.prototype, "currency", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", Number)
], CommissionEntity.prototype, "value", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], CommissionEntity.prototype, "period", void 0);
__decorate([
    typeorm_1.OneToOne(type => selling_business_contract_entity_1.SellingBusinessContractEntity, sellingBusinessContract => sellingBusinessContract.commission, {
        cascade: true
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", selling_business_contract_entity_1.SellingBusinessContractEntity)
], CommissionEntity.prototype, "sellingBusinessContract", void 0);
CommissionEntity = __decorate([
    typeorm_1.Entity('commission')
], CommissionEntity);
exports.CommissionEntity = CommissionEntity;
//# sourceMappingURL=commission.entity.js.map