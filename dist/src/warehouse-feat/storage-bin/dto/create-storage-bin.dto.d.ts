import { BinType } from 'src/warehouse-feat/enum/bin-type.enum';
export declare class CreateStorageBinDto {
    maxWeight: number;
    name: string;
    totalCapicity: number;
    type: BinType;
    storageSestion: string;
    storageType: string;
    activityArea: string;
}
