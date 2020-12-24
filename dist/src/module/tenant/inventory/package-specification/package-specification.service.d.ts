import { BaseService } from 'src/base/base.service';
import { PackageSpecificationEntity } from 'src/entities/tenant/inventory/package-specification.entity';
import { PackageSpecificationRepository } from './package-specification.repository';
export declare class PackageSpecificationService extends BaseService<PackageSpecificationEntity, PackageSpecificationRepository> {
    private connection;
    constructor(repository: PackageSpecificationRepository, connection: any);
}
