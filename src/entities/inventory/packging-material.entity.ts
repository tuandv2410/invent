import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";
import { PmType } from "src/inventory/enum/pm-type.enum"
import { PmCategory } from "src/inventory/enum/pm-category.enum";
import { HandlingUnitEntity } from "./handling-unit.entity";
import { PackageSpecificationEntity } from "./package-specification.entity";

@Entity('packging-material')
export class PackgingMaterialEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column()
    type: PmType;

    @AutoMap()
    @Column()
    category: PmCategory;

    @AutoMap()
    @Column()
    tareWeight: number;

    @AutoMap()
    @Column()
    tareVolume: string;

    @AutoMap()
    @Column()
    capacities: string;

    @AutoMap(()=>HandlingUnitEntity)
    @OneToMany(type => HandlingUnitEntity, handlingUnit => handlingUnit.packgingMaterial)
    handlingUnits: HandlingUnitEntity[];

    @AutoMap(()=>PackageSpecificationEntity)
    @OneToMany(type => PackageSpecificationEntity, packageSpecification => packageSpecification.packgingMaterial)
    packageSpecifications: PackageSpecificationEntity[];
}