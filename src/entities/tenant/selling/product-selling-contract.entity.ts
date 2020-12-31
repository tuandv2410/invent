import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { SkuEntity } from "../inventory/sku.entity";
import { SellingBusinessContractEntity } from "./selling-business-contract.entity";

@Entity('product-selling-contract')
export class ProductSellingContractEntity extends BaseEntity {
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

    @ManyToOne(type => SkuEntity, sku => sku.productSellingContracts, {
        cascade: true
    })
    sku: SkuEntity;

    @ManyToOne(type => SellingBusinessContractEntity, sellingBusinessContract => sellingBusinessContract.productSellingContracts, {
        cascade: true
    })
    sellingBusinessContract: SellingBusinessContractEntity;

}