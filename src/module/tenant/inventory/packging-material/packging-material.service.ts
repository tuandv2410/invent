import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { PackgingMaterialEntity } from 'src/entities/tenant/inventory/packging-material.entity';
import { PackgingMaterialRepository } from './packging-material.repository';

@Injectable()
export class PackgingMaterialService extends BaseService<PackgingMaterialEntity, PackgingMaterialRepository>{
    constructor(
        repository: PackgingMaterialRepository,
        @Inject('CONNECTION') private connection
    ) {
        super(repository)
        this.repository = this.connection.getRepository(PackgingMaterialEntity);
    }
}