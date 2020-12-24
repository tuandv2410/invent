import { HuStatus } from 'src/module/tenant/inventory/enum/hu-status.enum';
import { HuType } from 'src/module/tenant/inventory/enum/hu-type.enum';
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
export declare class PackageSpecificationDto {
    id: string;
    name: string;
    packingLevel: number;
    quantity: number;
    handlingUnits: HandlingUnit[];
}
export {};
