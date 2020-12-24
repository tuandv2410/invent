import { StoType } from 'src/module/tenant/warehouse-feat/enum/sto-type.enum';
import { ActArea } from 'src/module/tenant/warehouse-feat/enum/activity-area.enum';
declare class StorageType {
    id: string;
    name: string;
    areaType: StoType;
}
declare class AcivityArea {
    id: string;
    name: string;
    activity: ActArea;
}
export declare class WarehouseDto {
    id: string;
    location: string;
    name: string;
    storageTypes: StorageType[];
    activityAreas: AcivityArea[];
}
export {};
