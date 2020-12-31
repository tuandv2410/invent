import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { AccountTypes } from "src/enum/account-stype.enum";
import { Period } from "src/enum/period.enum";
import { ReceiptEntity } from "./receipt.entity";

@Entity('revenue')
export class RevenueEntity extends BaseEntity {
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

    @ManyToOne(type => ReceiptEntity, receipt => receipt.revenues, {
        cascade: true
    })
    receipt: ReceiptEntity;
}