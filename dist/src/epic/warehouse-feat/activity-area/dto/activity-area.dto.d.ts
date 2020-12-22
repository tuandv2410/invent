import { ActArea } from 'src/epic/warehouse-feat/enum/activity-area.enum';
import { BinType } from 'src/epic/warehouse-feat/enum/bin-type.enum';
declare class StorageBin {
    id: string;
    name: string;
    maxWeight: number;
    totalCapicity: number;
    type: BinType;
}
export declare class ActivityAreaDto {
    id: string;
    name: string;
    activity: ActArea;
    storageBins: StorageBin[];
}
export {};