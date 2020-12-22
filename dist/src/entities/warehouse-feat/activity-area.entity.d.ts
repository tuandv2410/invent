import { BaseEntity } from "typeorm";
import { ActArea } from "src/epic/warehouse-feat/enum/activity-area.enum";
import { WarehouseEntity } from "./warehouse.entity";
import { StorageBinEntity } from "./storage-bin.entity";
export declare class ActivityAreaEntity extends BaseEntity {
    id: string;
    name: string;
    activity: ActArea;
    warehouse: WarehouseEntity;
    storageBins: StorageBinEntity[];
}
