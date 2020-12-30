import { BaseEntity, Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { SourcingPaymentStatus } from "src/enum/sourcing-payment-status.enum";
import { SourcingOrderEntity } from "./sourcing-order.entity";
import { AccountPayableEntity } from "./account-payable.entity";
import { PaymentVoucherEntity } from "./payment-voucher.entity";

@Entity('sourcing-payment')
export class SourcingPaymentEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column({
        nullable: false,
    })
    status: SourcingPaymentStatus

    @AutoMap()
    @Column({
        nullable: false,
    })
    value : number;

    @AutoMap()
    @Column({
        nullable: false,
    })
    currency : string

    @ManyToOne(type => SourcingOrderEntity, sourcingOrder => sourcingOrder.sourcingpayments, {
        cascade: true
    })
    sourcingOrder: SourcingOrderEntity;

    @AutoMap(()=>AccountPayableEntity)
    @OneToOne(type => AccountPayableEntity, accountPayable => accountPayable.sourcingPayment)
    accountPayable: AccountPayableEntity;

    @AutoMap(()=>PaymentVoucherEntity)
    @OneToMany(type => PaymentVoucherEntity, paymentVoucher => paymentVoucher.sourcingPayment)
    paymentVouchers: PaymentVoucherEntity[];
}