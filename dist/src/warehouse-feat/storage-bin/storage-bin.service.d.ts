import { BaseService } from 'src/base/base.service';
import { StorageBinEntity } from 'src/entities/warehouse-feat/storage-bin.entity';
import { StorageBinRepository } from './storage-bin.repository';
export declare class StorageBinService extends BaseService<StorageBinEntity, StorageBinRepository> {
    constructor(repository: StorageBinRepository);
}
