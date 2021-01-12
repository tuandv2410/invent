import { BinType } from 'src/enum/bin-type.enum';
declare class StorageBin {
    id: string;
    name: string;
    maxWeight: number;
    totalCapicity: number;
    type: BinType;
}
export declare class StorageSectionDto {
    id: string;
    name: string;
    storageBins: StorageBin[];
}
export {};
