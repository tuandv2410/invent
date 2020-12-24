import { BaseService } from 'src/base/base.service';
import { SkuEntity } from 'src/entities/tenant/inventory/sku.entity';
import { SkuRepository } from './sku.repository';
export declare class SkuService extends BaseService<SkuEntity, SkuRepository> {
    private connection;
    constructor(repository: SkuRepository, connection: any);
}
