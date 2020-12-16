import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { BaseEntity, InsertResult, Repository } from 'typeorm';
import { IBaseService } from './i.base.service';
export declare class BaseService<T extends BaseEntity, R extends Repository<T>> implements IBaseService<T> {
    protected readonly repository: R;
    constructor(repository: R);
    findById(id: string): Promise<T>;
    findByIds(ids: [string]): Promise<T[]>;
    get(data: any): Promise<T[]>;
    getWithRelations(data: any): Promise<T[]>;
    store(data: any): Promise<InsertResult>;
    update(id: string, data: any): Promise<T>;
    delete(id: string): Promise<DeleteResultInterface>;
}
