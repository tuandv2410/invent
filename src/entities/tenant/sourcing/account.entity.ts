import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { AccountTypes } from "src/enum/account-stype.enum";
import { Period } from "src/enum/period.enum";
import { PaymentVoucherEntity } from "./payment-voucher.entity";

@Entity('account')
export class AccountEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column({
        nullable: false,
    })
    startDate: string;
    @AutoMap()
    @Column({
        nullable: false,
    })
    endDate: string;

    @AutoMap()
    @Column({
        nullable: false,
    })
    currency : string;

    @AutoMap()
    @Column({
        nullable: false,
    })
    value : number;

    @AutoMap()
    @Column({
        nullable: false,
    })
    type: AccountTypes

    @AutoMap()
    @Column({
        nullable: false,
    })
    period: Period

    @ManyToOne(type => PaymentVoucherEntity, paymentVoucher => paymentVoucher.accounts, {
        cascade: true
    })
    paymentVoucher: PaymentVoucherEntity;
}