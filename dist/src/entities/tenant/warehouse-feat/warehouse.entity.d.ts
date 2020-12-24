import { BaseEntity } from "typeorm";
import { StorageTypeEntity } from "./storage-type.entity";
import { ActivityAreaEntity } from "./activity-area.entity";
export declare class WarehouseEntity extends BaseEntity {
    id: string;
    name: string;
    location: string;
    storageTypes: StorageTypeEntity[];
    activityAreas: ActivityAreaEntity[];
}
