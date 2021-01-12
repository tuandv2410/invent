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
exports.ReceiptEntity = void 0;
const typeorm_1 = require("typeorm");
const nestjsx_automapper_1 = require("nestjsx-automapper");
const selling_payment_entity_1 = require("./selling-payment.entity");
const revenue_entity_1 = require("./revenue.entity");
let ReceiptEntity = class ReceiptEntity extends typeorm_1.BaseEntity {
};
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], ReceiptEntity.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], ReceiptEntity.prototype, "createDate", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], ReceiptEntity.prototype, "skuId", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], ReceiptEntity.prototype, "productId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => selling_payment_entity_1.SellingPaymentEntity, sellingPayment => sellingPayment.receipts, {
        cascade: true
    }),
    __metadata("design:type", selling_payment_entity_1.SellingPaymentEntity)
], ReceiptEntity.prototype, "sellingPayment", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => revenue_entity_1.RevenueEntity),
    typeorm_1.OneToMany(type => revenue_entity_1.RevenueEntity, revenue => revenue.receipt),
    __metadata("design:type", Array)
], ReceiptEntity.prototype, "revenues", void 0);
ReceiptEntity = __decorate([
    typeorm_1.Entity('receipt')
], ReceiptEntity);
exports.ReceiptEntity = ReceiptEntity;
//# sourceMappingURL=receipt.entity.js.map