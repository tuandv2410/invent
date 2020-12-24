import { StorageSectionEntity } from "src/entities/tenant/warehouse-feat/storage-section.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(StorageSectionEntity)
export class StorageSectionRepository extends Repository<StorageSectionEntity> {
    
}