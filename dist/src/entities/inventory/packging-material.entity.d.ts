import { BaseEntity } from "typeorm";
import { PmType } from "src/inventory/enum/pm-type.enum";
import { PmCategory } from "src/inventory/enum/pm-category.enum";
import { HandlingUnitEntity } from "./handling-unit.entity";
import { PackageSpecificationEntity } from "./package-specification.entity";
export declare class PackgingMaterialEntity extends BaseEntity {
    id: string;
    type: PmType;
    category: PmCategory;
    tareWeight: number;
    tareVolume: number;
    capacities: number;
    handlingUnits: HandlingUnitEntity[];
    packageSpecifications: PackageSpecificationEntity[];
}
