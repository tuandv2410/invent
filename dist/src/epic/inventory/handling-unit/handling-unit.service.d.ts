import { BaseService } from 'src/base/base.service';
import { HandlingUnitEntity } from 'src/entities/inventory/handling-unit.entity';
import { HandlingUnitRepository } from './handling-unit.repository';
export declare class HandlingUnitService extends BaseService<HandlingUnitEntity, HandlingUnitRepository> {
    constructor(repository: HandlingUnitRepository);
}
