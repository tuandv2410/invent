import { BaseEntity, Column, Entity, ObjectIdColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { PaymentStatus } from "src/business/enum/payment-status.enum";

@Entity('payment')
export class PaymentEntity extends BaseEntity {
    @AutoMap()
    @ObjectIdColumn()
    id: number;

    @AutoMap()
    @Column()
    value: number;

    @AutoMap()
    @Column()
    status: PaymentStatus;

    @AutoMap()
    @Column()
    date: string;
}