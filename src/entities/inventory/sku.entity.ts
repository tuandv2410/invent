import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { StorageBinEntity } from "../warehouse-feat/storage-bin.entity";
import { HandlingUnitEntity } from "./handling-unit.entity";
import { ProductEntity } from "./product.entity";
import { ProductContractEntity } from "../business/product-contract.entity";
import { ProductOrderEntity } from "../business/product-order.entity";

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

    @AutoMap(()=>ProductContractEntity)
    @OneToMany(type => ProductContractEntity, productContract => productContract.sku)
    productContracts: ProductContractEntity[];


    @AutoMap(()=>ProductOrderEntity)
    @OneToMany(type => ProductOrderEntity, productOrder => productOrder.sku)
    productOrders: ProductOrderEntity[];
}