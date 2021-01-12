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
exports.SourcingPaymentEntity = void 0;
const typeorm_1 = require("typeorm");
const nestjsx_automapper_1 = require("nestjsx-automapper");
const sourcing_payment_status_enum_1 = require("../../../enum/sourcing-payment-status.enum");
const sourcing_order_entity_1 = require("./sourcing-order.entity");
const account_payable_entity_1 = require("./account-payable.entity");
const payment_voucher_entity_1 = require("./payment-voucher.entity");
let SourcingPaymentEntity = class SourcingPaymentEntity extends typeorm_1.BaseEntity {
};
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], SourcingPaymentEntity.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], SourcingPaymentEntity.prototype, "status", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", Number)
], SourcingPaymentEntity.prototype, "value", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], SourcingPaymentEntity.prototype, "currency", void 0);
__decorate([
    typeorm_1.ManyToOne(type => sourcing_order_entity_1.SourcingOrderEntity, sourcingOrder => sourcingOrder.sourcingpayments, {
        cascade: true
    }),
    __metadata("design:type", sourcing_order_entity_1.SourcingOrderEntity)
], SourcingPaymentEntity.prototype, "sourcingOrder", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => account_payable_entity_1.AccountPayableEntity),
    typeorm_1.OneToOne(type => account_payable_entity_1.AccountPayableEntity, accountPayable => accountPayable.sourcingPayment),
    __metadata("design:type", account_payable_entity_1.AccountPayableEntity)
], SourcingPaymentEntity.prototype, "accountPayable", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => payment_voucher_entity_1.PaymentVoucherEntity),
    typeorm_1.OneToMany(type => payment_voucher_entity_1.PaymentVoucherEntity, paymentVoucher => paymentVoucher.sourcingPayment),
    __metadata("design:type", Array)
], SourcingPaymentEntity.prototype, "paymentVouchers", void 0);
SourcingPaymentEntity = __decorate([
    typeorm_1.Entity('sourcing-payment')
], SourcingPaymentEntity);
exports.SourcingPaymentEntity = SourcingPaymentEntity;
//# sourceMappingURL=sourcing-payment.entity.js.map