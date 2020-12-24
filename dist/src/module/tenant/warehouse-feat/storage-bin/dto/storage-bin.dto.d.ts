import { BinType } from 'src/module/tenant/warehouse-feat/enum/bin-type.enum';
declare class Sku {
    id: string;
    productName: string;
    expireDate: string;
    unitPrice: number;
    currency: string;
    quantity: number;
}
export declare class StorageBinDto {
    id: string;
    name: string;
    maxWeight: number;
    totalCapicity: number;
    type: BinType;
    skus: Sku[];
}
export {};
