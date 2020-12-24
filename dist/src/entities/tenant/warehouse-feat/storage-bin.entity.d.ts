import { BaseEntity } from "typeorm";
import { BinType } from "src/module/tenant/warehouse-feat/enum/bin-type.enum";
import { StorageTypeEntity } from "./storage-type.entity";
import { StorageSectionEntity } from "./storage-section.entity";
import { ActivityAreaEntity } from "./activity-area.entity";
import { SkuEntity } from "../inventory/sku.entity";
export declare class StorageBinEntity extends BaseEntity {
    id: string;
    name: string;
    maxWeight: number;
    totalCapicity: number;
    type: BinType;
    storageType: StorageTypeEntity;
    storageSection: StorageSectionEntity;
    activityArea: ActivityAreaEntity;
    skus: SkuEntity[];
}
