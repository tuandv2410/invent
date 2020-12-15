import { AddingServiceEntity } from "src/entities/business/adding-service.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(AddingServiceEntity)
export class AddingServiceRepository extends Repository<AddingServiceEntity> {
    
}