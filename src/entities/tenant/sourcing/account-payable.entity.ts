import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { Period } from "src/enum/period.enum";
import { SourcingPaymentEntity } from "./sourcing-payment.entity";

@Entity('account-payable')
export class AccountPayableEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column({
        nullable: false,
    })
    dueDate: string;

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
    period: Period
    
    @OneToOne(type => SourcingPaymentEntity, sourcingPayment => sourcingPayment.accountPayable, {
        cascade: true
    })
    @JoinColumn()
    sourcingPayment: SourcingPaymentEntity;

}