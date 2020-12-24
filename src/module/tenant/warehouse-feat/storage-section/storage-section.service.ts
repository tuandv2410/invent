import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { StorageSectionEntity } from 'src/entities/tenant/warehouse-feat/storage-section.entity';
import { StorageSectionRepository } from './storage-section.repository';

@Injectable()
export class StorageSectionService extends BaseService<StorageSectionEntity, StorageSectionRepository>{
    constructor(
        repository: StorageSectionRepository,
        @Inject('CONNECTION') private connection
    ) {
        super(repository)
        this.repository = this.connection.getRepository(StorageSectionEntity);
    }
}