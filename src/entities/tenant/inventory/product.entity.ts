import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { SkuEntity } from "./sku.entity";
import { HandlingUnitEntity } from "./handling-unit.entity";
import { PackageSpecificationEntity } from "./package-specification.entity";

@Entity('product')
export class ProductEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column({
        nullable: false,
    })
    name: string;

    @AutoMap()
    @Column({
        nullable: true,
    })
    weight: number;

    @AutoMap()
    @Column({
        nullable: true,
    })
    volume: number;

    @AutoMap()
    @Column({
        nullable: true,
    })
    category: string;

    @AutoMap()
    @Column({
        nullable: false,
    })
    unitOfMeasurement: string;

    @AutoMap()
    @Column({
        nullable: true,
    })
    color: string;


    @AutoMap(()=>SkuEntity)
    @OneToMany(type => SkuEntity, sku => sku.product)
    skus: SkuEntity[];

    @AutoMap(()=>HandlingUnitEntity)
    @OneToMany(type => HandlingUnitEntity, handlingUnit => handlingUnit.product)
    handlingUnits: HandlingUnitEntity[];

    @AutoMap(()=>PackageSpecificationEntity)
    @OneToMany(type => PackageSpecificationEntity, packageSpecification => packageSpecification.product)
    packageSpecifications: PackageSpecificationEntity[];
}