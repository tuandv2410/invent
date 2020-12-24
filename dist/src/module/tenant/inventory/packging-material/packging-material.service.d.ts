import { BaseService } from 'src/base/base.service';
import { PackgingMaterialEntity } from 'src/entities/tenant/inventory/packging-material.entity';
import { PackgingMaterialRepository } from './packging-material.repository';
export declare class PackgingMaterialService extends BaseService<PackgingMaterialEntity, PackgingMaterialRepository> {
    private connection;
    constructor(repository: PackgingMaterialRepository, connection: any);
}
