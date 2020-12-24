import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { StorageBinEntity } from 'src/entities/tenant/warehouse-feat/storage-bin.entity';
import { StorageBinRepository } from './storage-bin.repository';

@Injectable()
export class StorageBinService extends BaseService<StorageBinEntity, StorageBinRepository>{
    constructor(
        repository: StorageBinRepository,
        @Inject('CONNECTION') private connection
    ) {
        super(repository)
        this.repository = this.connection.getRepository(StorageBinEntity);
    }
}