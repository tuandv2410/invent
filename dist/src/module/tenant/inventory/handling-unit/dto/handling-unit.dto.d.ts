import { HuType } from '../../../../../enum/hu-type.enum';
import { HuStatus } from '../../../../../enum/hu-status.enum';
declare class Sku {
    id: string;
    expireDate: string;
    unitPrice: number;
    currency: string;
    quantity: number;
}
export declare class HandlingUnitDto {
    id: string;
    type: HuType;
    parentId: string;
    dimension: number;
    weight: number;
    volume: number;
    totalPrice: number;
    currency: string;
    quantity: number;
    status: HuStatus;
    skus: Sku[];
}
export {};
