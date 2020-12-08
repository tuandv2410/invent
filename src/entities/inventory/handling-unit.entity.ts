import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { HuType } from "src/inventory/enum/hu-type.enum";
import { HuStatus } from "src/inventory/enum/hu-status.enum";
import { SkuEntity } from "./sku.entity";
import { ProductEntity } from "./product.entity";
import { PackageSpecificationEntity } from "./package-specification.entity";
import { PackgingMaterialEntity } from "./packging-material.entity";

@Entity('handling-unit')
export class HandlingUnitEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column()
    type: HuType;

    @AutoMap()
    @Column()
    dimension: number;

    @AutoMap()
    @Column()
    weight: number;

    @AutoMap()
    @Column()
    volume: number;

    @AutoMap()
    @Column()
    totalPrice: number;

    @AutoMap()
    @Column()
    currency: string;

    @AutoMap()
    @Column()
    quantity: number;

    @AutoMap()
    @Column()
    status: HuStatus;


    @AutoMap(()=>SkuEntity)
    @OneToMany(type => SkuEntity, sku => sku.handlingUnit)
    skus: SkuEntity[];

    @ManyToOne(type => ProductEntity, product => product.handlingUnits, {
        cascade: true
    })
    product: ProductEntity;

    @ManyToOne(type => PackageSpecificationEntity, packageSpecification => packageSpecification.handlingUnits, {
        cascade: true
    })
    packageSpecification: PackageSpecificationEntity;

    @ManyToOne(type => PackgingMaterialEntity, packgingMaterial => packgingMaterial.handlingUnits, {
        cascade: true
    })
    packgingMaterial: ProductEntity;
}