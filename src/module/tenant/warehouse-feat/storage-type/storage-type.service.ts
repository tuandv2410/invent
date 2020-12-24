import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { StorageTypeEntity } from 'src/entities/tenant/warehouse-feat/storage-type.entity';
import { StorageTypeRepository } from './storage-type.repository';

@Injectable()
export class StorageTypeService extends BaseService<StorageTypeEntity, StorageTypeRepository>{
    constructor(
        repository: StorageTypeRepository,
        @Inject('CONNECTION') private connection
    ) {
        super(repository)
        this.repository = this.connection.getRepository(StorageTypeEntity);
    }
}