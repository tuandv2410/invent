import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { HandlingUnitEntity } from "./handling-unit.entity";
import { ProductEntity } from "./product.entity";
import { PackgingMaterialEntity } from "./packging-material.entity";

@Entity('package-specification')
export class PackageSpecificationEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column()
    name: string;

    @AutoMap()
    @Column()
    packingLevel: number;

    @AutoMap()
    @Column()
    quantity: number;

    @AutoMap(()=>HandlingUnitEntity)
    @OneToMany(type => HandlingUnitEntity, handlingUnit => handlingUnit.packageSpecification)
    handlingUnits: HandlingUnitEntity[];

    @ManyToOne(type => ProductEntity, product => product.packageSpecifications, {
        cascade: true
    })
    product: ProductEntity;

    @ManyToOne(type => PackgingMaterialEntity, packgingMaterial => packgingMaterial.packageSpecifications, {
        cascade: true
    })
    packgingMaterial: PackgingMaterialEntity;
}