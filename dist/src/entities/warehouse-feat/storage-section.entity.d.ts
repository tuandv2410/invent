import { BaseEntity } from "typeorm";
import { StorageTypeEntity } from "./storage-type.entity";
import { StorageBinEntity } from "./storage-bin.entity";
export declare class StorageSectionEntity extends BaseEntity {
    id: string;
    name: string;
    storageType: StorageTypeEntity;
    storageBins: StorageBinEntity[];
}
