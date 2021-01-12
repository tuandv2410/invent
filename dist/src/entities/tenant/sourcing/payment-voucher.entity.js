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
exports.PaymentVoucherEntity = void 0;
const typeorm_1 = require("typeorm");
const nestjsx_automapper_1 = require("nestjsx-automapper");
const sourcing_payment_entity_1 = require("./sourcing-payment.entity");
const account_entity_1 = require("./account.entity");
let PaymentVoucherEntity = class PaymentVoucherEntity extends typeorm_1.BaseEntity {
};
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], PaymentVoucherEntity.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], PaymentVoucherEntity.prototype, "createDate", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], PaymentVoucherEntity.prototype, "skuId", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], PaymentVoucherEntity.prototype, "productId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => sourcing_payment_entity_1.SourcingPaymentEntity, sourcingPayment => sourcingPayment.paymentVouchers, {
        cascade: true
    }),
    __metadata("design:type", sourcing_payment_entity_1.SourcingPaymentEntity)
], PaymentVoucherEntity.prototype, "sourcingPayment", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => account_entity_1.AccountEntity),
    typeorm_1.OneToMany(type => account_entity_1.AccountEntity, account => account.paymentVoucher),
    __metadata("design:type", Array)
], PaymentVoucherEntity.prototype, "accounts", void 0);
PaymentVoucherEntity = __decorate([
    typeorm_1.Entity('payment-voucher')
], PaymentVoucherEntity);
exports.PaymentVoucherEntity = PaymentVoucherEntity;
//# sourceMappingURL=payment-voucher.entity.js.map