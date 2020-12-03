import { BaseEntity } from "typeorm";
import { BinType } from "src/warehouse-feat/enum/bin-type.enum";
export declare class StorageBinEntity extends BaseEntity {
    id: number;
    maxWeight: number;
    totalCapicity: number;
    type: BinType;
}
