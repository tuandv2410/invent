import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn} from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { Period } from "src/enum/period.enum";

@Entity('selling-expense')
export class SellingExpenseEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column({
        nullable: false,
        unique: true
    })
    description: string;

    @AutoMap()
    @Column({
        nullable: false,
    })
    paidDate: string;

    @AutoMap()
    @Column({
        nullable: false,
    })
    value: string;

    @AutoMap()
    @Column({
        nullable: false,
    })
    currency: string;


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
    period: Period;

}