import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn} from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { BpCategory } from "src/enum/bp-category.enum";
import { BpFunction } from "src/enum/bp-function.enum";
import { BpStatus } from "src/enum/bp-status.enum";
import { SourcingBusinessContractEntity } from "../sourcing/sourcing-business-contract.entity";
import { SellingBusinessContractEntity } from "../selling/selling-business-contract.entity";

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

    @AutoMap(()=>SourcingBusinessContractEntity)
    @OneToMany(type => SourcingBusinessContractEntity, sourcingBusinessContract => sourcingBusinessContract.businessPartner)
    sourcingBusinessContracts: SourcingBusinessContractEntity[];


    @AutoMap(()=>SellingBusinessContractEntity)
    @OneToMany(type => SellingBusinessContractEntity, sellingBusinessContract => sellingBusinessContract.businessPartner)
    sellingBusinessContracts: SellingBusinessContractEntity[];
}