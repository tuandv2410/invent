import { BaseEntity, Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { BusinessPartnerEntity } from "../inventory/business-partner.entity";
import { ProductSellingContractEntity } from "./product-selling-contract.entity";
import { SellingOrderEntity } from "./selling-order.entity";
import { CommissionEntity } from "./commission.entity"
import { AddingServiceEntity } from "./adding-service.entity";

@Entity('selling-business-contract')
export class SellingBusinessContractEntity extends BaseEntity {
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

    @ManyToOne(type => BusinessPartnerEntity, businessPartner => businessPartner.sellingBusinessContracts, {
        cascade: true
    })
    businessPartner: BusinessPartnerEntity;

    @AutoMap(()=>ProductSellingContractEntity)
    @OneToMany(type => ProductSellingContractEntity, productSellingContract => productSellingContract.sellingBusinessContract)
    productSellingContracts: ProductSellingContractEntity[]

    @AutoMap(()=>SellingOrderEntity)
    @OneToMany(type => SellingOrderEntity, sellingOrder => sellingOrder.sellingBusinessContract)
    sellingOrders: SellingOrderEntity[]

    @AutoMap(()=>CommissionEntity)
    @OneToOne(type => CommissionEntity, commission => commission.sellingBusinessContract)
    commission: CommissionEntity;

    @AutoMap(()=>AddingServiceEntity)
    @OneToMany(type => AddingServiceEntity, addingService => addingService.sellingBusinessContract)
    addingServices: AddingServiceEntity[]
}