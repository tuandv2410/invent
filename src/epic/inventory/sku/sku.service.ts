import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { SkuEntity } from 'src/entities/inventory/sku.entity';
import { SkuRepository } from './sku.repository';

@Injectable()
export class SkuService extends BaseService<SkuEntity, SkuRepository>{
    constructor(repository: SkuRepository) {
        super(repository)
    }
}