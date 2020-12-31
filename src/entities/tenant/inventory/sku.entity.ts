import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { StorageBinEntity } from "../warehouse-feat/storage-bin.entity";
import { HandlingUnitEntity } from "./handling-unit.entity";
import { ProductEntity } from "./product.entity";
import { ProductSourcingContractEntity } from "../sourcing/product-sourcing-contract.entity";
import { ProductSourcingOrderEntity } from "../sourcing/product-sourcing-order.entity";
import { ProductSellingOrderEntity } from "../selling/product-selling-order.entity";
import { ProductSellingContractEntity } from "../selling/product-selling-contract.entity";

@Entity('sku')
export class SkuEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column()
    productName: string;

    @AutoMap()
    @Column()
    productId: string;

    @AutoMap()
    @Column()
    expireDate: string;

    @AutoMap()
    @Column()
    unitPrice: number;

    @AutoMap()
    @Column()
    currency: string;

    @AutoMap()
    @Column()
    quantity: number;

    @ManyToOne(type => StorageBinEntity, storageBin => storageBin.skus, {
        cascade: true
    })
    storageBin: StorageBinEntity;

    @ManyToOne(type => HandlingUnitEntity, handlingUnit => handlingUnit.skus, {
        cascade: true
    })
    handlingUnit: HandlingUnitEntity;

    @ManyToOne(type => ProductEntity, product => product.skus, {
        cascade: true
    })
    product: ProductEntity;

    @AutoMap(()=>ProductSourcingContractEntity)
    @OneToMany(type => ProductSourcingContractEntity, productSourcingContract => productSourcingContract.sku)
    productSourcingContracts: ProductSourcingContractEntity[];


    @AutoMap(()=>ProductSourcingOrderEntity)
    @OneToMany(type => ProductSourcingOrderEntity, productSourcingOrder => productSourcingOrder.sku)
    productSourcingOrders: ProductSourcingOrderEntity[];

    @AutoMap(()=>ProductSellingContractEntity)
    @OneToMany(type => ProductSellingContractEntity, productSellingContract => productSellingContract.sku)
    productSellingContracts: ProductSellingContractEntity[];


    @AutoMap(()=>ProductSellingOrderEntity)
    @OneToMany(type => ProductSellingOrderEntity, productSellingOrder => productSellingOrder.sku)
    productSellingOrders: ProductSellingOrderEntity[];
}