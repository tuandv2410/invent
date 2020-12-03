import { BaseEntity } from "typeorm";
import { StoType } from "src/warehouse-feat/enum/sto-type.enum";
export declare class StorageTypeEntity extends BaseEntity {
    id: number;
    areaType: StoType;
}
