import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { HandlingUnitEntity } from 'src/entities/inventory/handling-unit.entity';
import { HandlingUnitRepository } from './handling-unit.repository';

@Injectable()
export class HandlingUnitService extends BaseService<HandlingUnitEntity, HandlingUnitRepository>{
    constructor(repository: HandlingUnitRepository) {
        super(repository)
    }
}