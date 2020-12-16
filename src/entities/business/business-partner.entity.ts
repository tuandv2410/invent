import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn} from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { BpCategory } from "src/business/enum/bp-category.enum";
import { BpFunction } from "src/business/enum/bp-function.enum";
import { BpStatus } from "src/business/enum/bp-status.enum";
import { BusinessContractEntity } from "./business-contract.entity";

@Entity('business-partner')
export class BusinessPartnerEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column({
        nullable: false,
        unique: true
    })
    fullName: string;

    @AutoMap()
    @Column({
        nullable: true,
    })
    address: string;

    @AutoMap()
    @Column({
        nullable: true,
    })
    taxInfo: string;

    @AutoMap()
    @Column({
        nullable: true,
    })
    phone: string;

    @AutoMap()
    @Column({
        nullable: true,
    })
    email: string;

    @AutoMap()
    @Column({
        nullable: true,
    })
    discount: number;

    @AutoMap()
    @Column({
        nullable: true,
    })
    category: BpCategory;

    @AutoMap()
    @Column({
        nullable: true,
    })
    function: BpFunction;

    @AutoMap()
    @Column({
        nullable: false,
    })
    status: BpStatus;

    @AutoMap(()=>BusinessContractEntity)
    @OneToMany(type => BusinessContractEntity, businessContract => businessContract.businessPartner)
    businessContracts: BusinessContractEntity[];

}