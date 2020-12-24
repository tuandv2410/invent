import { HuStatus } from '../../enum/hu-status.enum';
import { HuType } from '../../enum/hu-type.enum';
export declare class FilterGetHandlingUnitDto {
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
    product: string;
    packageSpecification: string;
    packgingMaterial: string;
}
