import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { SellingPaymentEntity } from "./selling-payment.entity";
import { RevenueEntity } from "./revenue.entity";

@Entity('receipt')
export class ReceiptEntity extends BaseEntity {
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

    @ManyToOne(type => SellingPaymentEntity, sellingPayment => sellingPayment.receipts, {
        cascade: true
    })
    sellingPayment: SellingPaymentEntity;

    @AutoMap(()=>RevenueEntity)
    @OneToMany(type => RevenueEntity, revenue => revenue.receipt)
    revenues: RevenueEntity[];
}