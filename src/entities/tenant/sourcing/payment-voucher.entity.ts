import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { SourcingPaymentEntity } from "./sourcing-payment.entity";
import { AccountEntity } from "./account.entity";

@Entity('payment-voucher')
export class PaymentVoucherEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column({
        nullable: false,
    })
    createDate: string;

    @AutoMap()
    @Column({
        nullable: false,
    })
    skuId : string;

    @AutoMap()
    @Column({
        nullable: false,
    })
    productId : string

    @ManyToOne(type => SourcingPaymentEntity, sourcingPayment => sourcingPayment.paymentVouchers, {
        cascade: true
    })
    sourcingPayment: SourcingPaymentEntity;

    @AutoMap(()=>AccountEntity)
    @OneToMany(type => AccountEntity, account => account.paymentVoucher)
    accounts: AccountEntity[];
}