import { HandlingUnitEntity } from "src/entities/inventory/handling-unit.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(HandlingUnitEntity)
export class HandlingUnitRepository extends Repository<HandlingUnitEntity> {
    
}