import { StoType } from 'src/module/tenant/warehouse-feat/enum/sto-type.enum';
import { BinType } from 'src/module/tenant/warehouse-feat/enum/bin-type.enum';
declare class StorageBin {
    id: string;
    name: string;
    maxWeight: number;
    totalCapicity: number;
    type: BinType;
}
declare class StorageSection {
    id: string;
    name: string;
}
export declare class StorageTypeDto {
    id: string;
    areaType: StoType;
    name: string;
    storageSections: StorageSection[];
    storageBins: StorageBin[];
}
export {};
