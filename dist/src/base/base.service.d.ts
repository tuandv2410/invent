import { BaseEntity, DeleteResult, Repository } from 'typeorm';
import { IBaseService } from './i.base.service';
import { EntityId } from 'typeorm/repository/EntityId';
export declare class BaseService<T extends BaseEntity, R extends Repository<T>> implements IBaseService<T> {
    protected readonly repository: R;
    constructor(repository: R);
    index(): Promise<T[]>;
    findById(id: EntityId): Promise<T>;
    findByIds(ids: [EntityId]): Promise<T[]>;
    store(data: any): Promise<T>;
    update(id: EntityId, data: any): Promise<T>;
    delete(id: EntityId): Promise<DeleteResult>;
}
