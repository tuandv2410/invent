import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { PackageSpecificationEntity } from 'src/entities/tenant/inventory/package-specification.entity';
import { PackageSpecificationRepository } from './package-specification.repository';

@Injectable()
export class PackageSpecificationService extends BaseService<PackageSpecificationEntity, PackageSpecificationRepository>{
    constructor(
        repository: PackageSpecificationRepository,
        @Inject('CONNECTION') private connection
    ) {
        super(repository)
        this.repository = this.connection.getRepository(PackageSpecificationEntity);
    }
}