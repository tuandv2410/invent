import { BaseEntity, DeleteResult, InsertResult, Repository } from 'typeorm'
import { IBaseService } from './i.base.service'

export class BaseService<T extends BaseEntity, R extends Repository<T>> implements IBaseService<T> {
    protected readonly repository: R

    constructor(repository: R) {
        this.repository = repository
    }

    findByIds(ids: [number]): Promise<T[]> {
        return this.repository.findByIds(ids)
    }

    get(data: any): Promise<T[]> {
        return this.repository.find({where:data})
    }

    store(data: any): Promise<InsertResult> {
        return  this.repository.save(data)
    }

    update(id: number, data: any): Promise<T> {
        this.repository.update(id, data)
        return this.repository.findOne(id)
    }

    delete(id: number): Promise<DeleteResult> {
        return this.repository.delete(id)
    }
}