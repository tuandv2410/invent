import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { StorageTypeEntity } from 'src/entities/warehouse-feat/storage-type.entity';
import { StorageTypeRepository } from './storage-type.repository';

@Injectable()
export class StorageTypeService extends BaseService<StorageTypeEntity, StorageTypeRepository>{
    constructor(repository: StorageTypeRepository) {
        super(repository)
    }
}