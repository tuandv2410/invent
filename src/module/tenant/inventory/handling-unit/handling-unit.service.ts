import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { HandlingUnitEntity } from 'src/entities/tenant/inventory/handling-unit.entity';
import { HandlingUnitRepository } from './handling-unit.repository';

@Injectable()
export class HandlingUnitService extends BaseService<HandlingUnitEntity, HandlingUnitRepository>{
    constructor(
        repository: HandlingUnitRepository,
        @Inject('CONNECTION') private connection
    ) {
        super(repository)
        this.repository = this.connection.getRepository(HandlingUnitEntity);
    }
}