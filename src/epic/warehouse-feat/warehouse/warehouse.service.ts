import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { WarehouseEntity } from 'src/entities/warehouse-feat/warehouse.entity';
import { WarehouseRepository } from './warehouse.repository';

@Injectable()
export class WarehouseService extends BaseService<WarehouseEntity, WarehouseRepository>{
    constructor(repository: WarehouseRepository) {
        super(repository)
    }
}