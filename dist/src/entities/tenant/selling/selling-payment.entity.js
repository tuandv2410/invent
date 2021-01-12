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
exports.SellingPaymentEntity = void 0;
const typeorm_1 = require("typeorm");
const nestjsx_automapper_1 = require("nestjsx-automapper");
const selling_payment_status_enum_1 = require("../../../enum/selling-payment-status.enum");
const selling_order_entity_1 = require("./selling-order.entity");
const account_receivable_entity_1 = require("./account-receivable.entity");
const receipt_entity_1 = require("./receipt.entity");
let SellingPaymentEntity = class SellingPaymentEntity extends typeorm_1.BaseEntity {
};
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], SellingPaymentEntity.prototype, "id", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], SellingPaymentEntity.prototype, "status", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", Number)
], SellingPaymentEntity.prototype, "value", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(),
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], SellingPaymentEntity.prototype, "currency", void 0);
__decorate([
    typeorm_1.ManyToOne(type => selling_order_entity_1.SellingOrderEntity, sellingOrder => sellingOrder.sellingpayments, {
        cascade: true
    }),
    __metadata("design:type", selling_order_entity_1.SellingOrderEntity)
], SellingPaymentEntity.prototype, "sellingOrder", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => account_receivable_entity_1.AccountReceivableEntity),
    typeorm_1.OneToOne(type => account_receivable_entity_1.AccountReceivableEntity, accountReceivable => accountReceivable.sellingPayment),
    __metadata("design:type", account_receivable_entity_1.AccountReceivableEntity)
], SellingPaymentEntity.prototype, "accountReceivable", void 0);
__decorate([
    nestjsx_automapper_1.AutoMap(() => receipt_entity_1.ReceiptEntity),
    typeorm_1.OneToMany(type => receipt_entity_1.ReceiptEntity, receipt => receipt.sellingPayment),
    __metadata("design:type", Array)
], SellingPaymentEntity.prototype, "receipts", void 0);
SellingPaymentEntity = __decorate([
    typeorm_1.Entity('selling-payment')
], SellingPaymentEntity);
exports.SellingPaymentEntity = SellingPaymentEntity;
//# sourceMappingURL=selling-payment.entity.js.map