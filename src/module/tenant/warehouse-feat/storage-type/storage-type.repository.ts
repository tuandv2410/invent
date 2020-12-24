import { StorageTypeEntity } from "src/entities/tenant/warehouse-feat/storage-type.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(StorageTypeEntity)
export class StorageTypeRepository extends Repository<StorageTypeEntity> {
    
}