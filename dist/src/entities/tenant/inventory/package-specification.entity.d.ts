import { BaseEntity } from "typeorm";
import { HandlingUnitEntity } from "./handling-unit.entity";
import { ProductEntity } from "./product.entity";
import { PackgingMaterialEntity } from "./packging-material.entity";
export declare class PackageSpecificationEntity extends BaseEntity {
    id: string;
    name: string;
    packingLevel: number;
    quantity: number;
    handlingUnits: HandlingUnitEntity[];
    product: ProductEntity;
    packgingMaterial: PackgingMaterialEntity;
}
