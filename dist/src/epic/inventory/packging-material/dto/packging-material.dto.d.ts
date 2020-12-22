import { PmCategory } from 'src/epic/inventory/enum/pm-category.enum';
import { PmType } from 'src/epic/inventory/enum/pm-type.enum';
import { HuType } from 'src/epic/inventory/enum/hu-type.enum';
import { HuStatus } from 'src/epic/inventory/enum/hu-status.enum';
declare class HandlingUnit {
    id: string;
    type: HuType;
    dimension: number;
    weight: number;
    volume: number;
    totalPrice: number;
    currency: string;
    quantity: number;
    status: HuStatus;
}
declare class PackageSpecification {
    id: string;
    name: string;
    packingLevel: number;
    quantity: number;
}
export declare class PackgingMaterialDto {
    id: string;
    type: PmType;
    category: PmCategory;
    tareWeight: number;
    tareVolume: number;
    capacities: number;
    handlingUnits: HandlingUnit[];
    packageSpecifications: PackageSpecification[];
}
export {};
