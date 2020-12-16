import { BaseService } from 'src/base/base.service';
import { StorageTypeEntity } from 'src/entities/warehouse-feat/storage-type.entity';
import { StorageTypeRepository } from './storage-type.repository';
export declare class StorageTypeService extends BaseService<StorageTypeEntity, StorageTypeRepository> {
    constructor(repository: StorageTypeRepository);
}
