import { BinType } from 'src/warehouse-feat/enum/bin-type.enum';
export declare class FilterGetStorageBinDto {
    id: string;
    name: string;
    maxWeight: number;
    totalCapicity: number;
    type: BinType;
    storageSestion: string;
    storageType: string;
    activityArea: string;
}
