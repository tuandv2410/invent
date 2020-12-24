import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { WarehouseEntity } from 'src/entities/tenant/warehouse-feat/warehouse.entity';
import { WarehouseRepository } from './warehouse.repository';

@Injectable()
export class WarehouseService extends BaseService<WarehouseEntity, WarehouseRepository>{
    constructor(
        repository: WarehouseRepository,
        @Inject('CONNECTION') private connection
    ) {
        super(repository)
        this.repository = this.connection.getRepository(WarehouseEntity);
    }
}