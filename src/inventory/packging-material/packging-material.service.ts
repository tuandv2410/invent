import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { PackgingMaterialEntity } from 'src/entities/inventory/packging-material.entity';
import { PackgingMaterialRepository } from './packging-material.repository';

@Injectable()
export class PackgingMaterialService extends BaseService<PackgingMaterialEntity, PackgingMaterialRepository>{
    constructor(repository: PackgingMaterialRepository) {
        super(repository)
    }
}