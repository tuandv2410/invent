import { BaseEntity } from "typeorm";
import { HuType } from "src/epic/inventory/enum/hu-type.enum";
import { HuStatus } from "src/epic/inventory/enum/hu-status.enum";
import { SkuEntity } from "./sku.entity";
import { ProductEntity } from "./product.entity";
import { PackageSpecificationEntity } from "./package-specification.entity";
export declare class HandlingUnitEntity extends BaseEntity {
    id: string;
    parentId: string;
    type: HuType;
    dimension: number;
    weight: number;
    volume: number;
    totalPrice: number;
    currency: string;
    quantity: number;
    status: HuStatus;
    skus: SkuEntity[];
    product: ProductEntity;
    packageSpecification: PackageSpecificationEntity;
    packgingMaterial: ProductEntity;
}
