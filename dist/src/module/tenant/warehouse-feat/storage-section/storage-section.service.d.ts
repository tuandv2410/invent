import { BaseService } from 'src/base/base.service';
import { StorageSectionEntity } from 'src/entities/tenant/warehouse-feat/storage-section.entity';
import { StorageSectionRepository } from './storage-section.repository';
export declare class StorageSectionService extends BaseService<StorageSectionEntity, StorageSectionRepository> {
    private connection;
    constructor(repository: StorageSectionRepository, connection: any);
}
