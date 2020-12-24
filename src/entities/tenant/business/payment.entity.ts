import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { PaymentStatus } from "src/module/tenant/business/enum/payment-status.enum";
import { OrderEntity } from "./order.entity";

@Entity('payment')
export class PaymentEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column({
        nullable: false,
    })
    value: number;

    @AutoMap()
    @Column({
        nullable: false,
    })
    status: PaymentStatus;

    @AutoMap()
    @Column({
        nullable: false,
    })
    date: string;

    @ManyToOne(type => OrderEntity, order => order.payments, {
        cascade: true
    })
    order: OrderEntity;
}