import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { Period } from "src/enum/period.enum";
import { SellingBusinessContractEntity } from "./selling-business-contract.entity";

@Entity('commission')
export class CommissionEntity extends BaseEntity {
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
    period: Period
    
    @OneToOne(type => SellingBusinessContractEntity, sellingBusinessContract => sellingBusinessContract.commission, {
        cascade: true
    })
    @JoinColumn()
    sellingBusinessContract: SellingBusinessContractEntity;

}