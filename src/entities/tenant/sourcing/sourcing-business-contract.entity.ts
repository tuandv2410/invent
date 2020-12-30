import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { BusinessPartnerEntity } from "../inventory/business-partner.entity";
import { ProductSourcingContractEntity } from "./product-sourcing-contract.entity";
import { SourcingOrderEntity } from "./sourcing-order.entity";

@Entity('sourcing-business-contract')
export class SourcingBusinessContractEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column({
        nullable: false,
    })
    createdDate: string;

    @AutoMap()
    @Column({
        nullable: false,
    })
    moneyValue: number;

    @ManyToOne(type => BusinessPartnerEntity, businessPartner => businessPartner.sourcingBusinessContracts, {
        cascade: true
    })
    businessPartner: BusinessPartnerEntity;

    @AutoMap(()=>ProductSourcingContractEntity)
    @OneToMany(type => ProductSourcingContractEntity, productSourcingContract => productSourcingContract.sourcingBusinessContract)
    productSourcingContracts: ProductSourcingContractEntity[]

    @AutoMap(()=>SourcingOrderEntity)
    @OneToMany(type => SourcingOrderEntity, sourcingOrder => sourcingOrder.sourcingBusinessContract)
    sourcingOrders: SourcingOrderEntity[]
}