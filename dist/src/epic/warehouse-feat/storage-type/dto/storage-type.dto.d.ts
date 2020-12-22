import { StoType } from 'src/epic/warehouse-feat/enum/sto-type.enum';
import { BinType } from 'src/epic/warehouse-feat/enum/bin-type.enum';
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