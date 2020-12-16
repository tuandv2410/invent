import { BaseService } from 'src/base/base.service';
import { WarehouseEntity } from 'src/entities/warehouse-feat/warehouse.entity';
import { WarehouseRepository } from './warehouse.repository';
export declare class WarehouseService extends BaseService<WarehouseEntity, WarehouseRepository> {
    constructor(repository: WarehouseRepository);
}
