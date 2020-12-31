import { BaseEntity, Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { SellingPaymentStatus } from "src/enum/selling-payment-status.enum";
import { SellingOrderEntity } from "./selling-order.entity";
import { AccountReceivableEntity } from "./account-receivable.entity";
import { ReceiptEntity } from "./receipt.entity";

@Entity('selling-payment')
export class SellingPaymentEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column({
        nullable: false,
    })
    status: SellingPaymentStatus

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

    @ManyToOne(type => SellingOrderEntity, sellingOrder => sellingOrder.sellingpayments, {
        cascade: true
    })
    sellingOrder: SellingOrderEntity;

    @AutoMap(()=>AccountReceivableEntity)
    @OneToOne(type => AccountReceivableEntity, accountReceivable => accountReceivable.sellingPayment)
    accountReceivable: AccountReceivableEntity;

    @AutoMap(()=>ReceiptEntity)
    @OneToMany(type => ReceiptEntity, receipt => receipt.sellingPayment)
    receipts: ReceiptEntity[];
}