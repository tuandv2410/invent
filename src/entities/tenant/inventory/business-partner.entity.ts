import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn} from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { BpCategory } from "src/enum/bp-category.enum";
import { BpFunction } from "src/enum/bp-function.enum";
import { BpStatus } from "src/enum/bp-status.enum";
import { SourcingBusinessContractEntity } from "../sourcing/sourcing-business-contract.entity";
import { SellingBusinessContractEntity } from "../selling/selling-business-contract.entity";

@Entity('business-partner')
export class BusinessPartnerEntity extends BaseEntity {
    @PrimaryColumn()
    id: string;

    @Column({
        nullable: false,
        unique: true
    })
    fullName: string;

    @Column({
        nullable: true,
    })
    address: string;

    @Column({
        nullable: true,
    })
    taxInfo: string;

    @Column({
        nullable: true,
    })
    phone: string;

    @Column({
        nullable: true,
    })
    email: string;

    @Column({
        nullable: true,
    })
    discount: number;

    @Column({
        nullable: true,
    })
    category: BpCategory;

    @Column({
        nullable: true,
    })
    function: BpFunction;

    @Column({
        nullable: false,
    })
    status: BpStatus;

    @OneToMany(type => SourcingBusinessContractEntity, sourcingBusinessContract => sourcingBusinessContract.businessPartner)
    sourcingBusinessContracts: SourcingBusinessContractEntity[];

    @OneToMany(type => SellingBusinessContractEntity, sellingBusinessContract => sellingBusinessContract.businessPartner)
    sellingBusinessContracts: SellingBusinessContractEntity[];
}