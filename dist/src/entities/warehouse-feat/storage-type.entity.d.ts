import { BaseEntity } from "typeorm";
import { StoType } from "src/warehouse-feat/enum/sto-type.enum";
import { WarehouseEntity } from "./warehouse.entity";
import { StorageSectionEntity } from "./storage-section.entity";
import { StorageBinEntity } from "./storage-bin.entity";
export declare class StorageTypeEntity extends BaseEntity {
    id: string;
    name: string;
    areaType: StoType;
    warehouse: WarehouseEntity;
    storageSections: StorageSectionEntity[];
    storageBins: StorageBinEntity[];
}
