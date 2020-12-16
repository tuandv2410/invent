import { HuStatus } from 'src/inventory/enum/hu-status.enum';
import { HuType } from 'src/inventory/enum/hu-type.enum';
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
export declare class ProductDto {
    id: string;
    name: string;
    weight: number;
    volume: number;
    category: string;
    unitOfMeasurement: string;
    color: string;
    handlingUnits: HandlingUnit[];
    packageSpecifications: PackageSpecification[];
}
export {};
