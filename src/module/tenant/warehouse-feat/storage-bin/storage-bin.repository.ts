import { StorageBinEntity } from "src/entities/tenant/warehouse-feat/storage-bin.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(StorageBinEntity)
export class StorageBinRepository extends Repository<StorageBinEntity> {
    
}