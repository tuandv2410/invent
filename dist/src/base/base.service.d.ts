import { BaseEntity, DeleteResult, InsertResult, Repository } from 'typeorm';
import { IBaseService } from './i.base.service';
export declare class BaseService<T extends BaseEntity, R extends Repository<T>> implements IBaseService<T> {
    protected readonly repository: R;
    constructor(repository: R);
    findByIds(ids: [number]): Promise<T[]>;
    get(data: any): Promise<T[]>;
    store(data: any): Promise<InsertResult>;
    update(id: number, data: any): Promise<T>;
    delete(id: number): Promise<DeleteResult>;
}
