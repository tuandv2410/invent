import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { StorageSectionEntity } from 'src/entities/warehouse-feat/storage-section.entity';
import { StorageSectionRepository } from './storage-section.repository';

@Injectable()
export class StorageSectionService extends BaseService<StorageSectionEntity, StorageSectionRepository>{
    constructor(repository: StorageSectionRepository) {
        super(repository)
    }
}