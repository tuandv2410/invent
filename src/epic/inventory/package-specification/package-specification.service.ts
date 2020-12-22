import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { PackageSpecificationEntity } from 'src/entities/inventory/package-specification.entity';
import { PackageSpecificationRepository } from './package-specification.repository';

@Injectable()
export class PackageSpecificationService extends BaseService<PackageSpecificationEntity, PackageSpecificationRepository>{
    constructor(repository: PackageSpecificationRepository) {
        super(repository)
    }
}