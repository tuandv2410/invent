import { AddingServiceEntity } from "src/entities/tenant/business/adding-service.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(AddingServiceEntity)
export class AddingServiceRepository extends Repository<AddingServiceEntity> {
    
}