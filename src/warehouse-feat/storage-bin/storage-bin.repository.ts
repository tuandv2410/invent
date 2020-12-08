import { StorageBinEntity } from "src/entities/warehouse-feat/storage-bin.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(StorageBinEntity)
export class StorageBinRepository extends Repository<StorageBinEntity> {
    
}