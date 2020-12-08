import { BaseEntity, Column, Entity, OneToOne, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { PaymentStatus } from "src/business/enum/payment-status.enum";
import { OrderEntity } from "./order.entity";

@Entity('payment')
export class PaymentEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column()
    value: number;

    @AutoMap()
    @Column()
    status: PaymentStatus;

    @AutoMap()
    @Column()
    date: string;

    @AutoMap(()=>OrderEntity)
    @OneToOne(type => OrderEntity, order => order.payment, {
        cascade: true
    })
    order: OrderEntity;
}