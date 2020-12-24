import { BaseEntity } from "typeorm";
import { SkuEntity } from "./sku.entity";
import { HandlingUnitEntity } from "./handling-unit.entity";
import { PackageSpecificationEntity } from "./package-specification.entity";
export declare class ProductEntity extends BaseEntity {
    id: string;
    name: string;
    weight: number;
    volume: number;
    category: string;
    unitOfMeasurement: string;
    color: string;
    skus: SkuEntity[];
    handlingUnits: HandlingUnitEntity[];
    packageSpecifications: PackageSpecificationEntity[];
}
