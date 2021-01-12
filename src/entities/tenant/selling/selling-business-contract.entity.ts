import { BaseEntity, Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { BusinessPartnerEntity } from "../inventory/business-partner.entity";
import { ProductSellingContractEntity } from "./product-selling-contract.entity";
import { SellingOrderEntity } from "./selling-order.entity";
import { CommissionEntity } from "./commission.entity"

@Entity('selling-business-contract')
export class SellingBusinessContractEntity extends BaseEntity {

    @PrimaryColumn()
    id: string;

    @Column({
        nullable: false,
    })
    createdDate: string;

    @Column({
        nullable: false,
    })
    moneyValue: number;

    @ManyToOne(type => BusinessPartnerEntity, businessPartner => businessPartner.sellingBusinessContracts, {
        cascade: true
    })
    businessPartner: BusinessPartnerEntity;

    @OneToMany(type => ProductSellingContractEntity, productSellingContract => productSellingContract.sellingBusinessContract)
    productSellingContracts: ProductSellingContractEntity[]

    @OneToMany(type => SellingOrderEntity, sellingOrder => sellingOrder.sellingBusinessContract)
    sellingOrders: SellingOrderEntity[]

    @OneToOne(type => CommissionEntity, commission => commission.sellingBusinessContract)
    commission: CommissionEntity;
}