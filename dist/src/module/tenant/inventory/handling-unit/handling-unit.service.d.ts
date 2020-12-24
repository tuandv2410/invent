import { BaseService } from 'src/base/base.service';
import { HandlingUnitEntity } from 'src/entities/tenant/inventory/handling-unit.entity';
import { HandlingUnitRepository } from './handling-unit.repository';
export declare class HandlingUnitService extends BaseService<HandlingUnitEntity, HandlingUnitRepository> {
    private connection;
    constructor(repository: HandlingUnitRepository, connection: any);
}
