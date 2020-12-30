import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { SkuEntity } from "../inventory/sku.entity";
import { SourcingBusinessContractEntity } from "./sourcing-business-contract.entity";

@Entity('product-sourcing-contract')
export class ProductSourcingContractEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column({
        nullable: false,
    })
    quantity: number;
    @AutoMap()
    @Column({
        nullable: false,
    })
    totalPricr: number;
    @AutoMap()
    @Column({
        nullable: false,
    })
    discount: number;
    @AutoMap()
    @Column({
        nullable: false,
    })
    currency: string;

    @ManyToOne(type => SkuEntity, sku => sku.productSourcingContracts, {
        cascade: true
    })
    sku: SkuEntity;

    @ManyToOne(type => SourcingBusinessContractEntity, sourcingBusinessContract => sourcingBusinessContract.productSourcingContracts, {
        cascade: true
    })
    sourcingBusinessContract: SourcingBusinessContractEntity;

}