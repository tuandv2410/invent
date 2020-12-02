import { BaseEntity, DeleteResult, Repository } from 'typeorm'
import { IBaseService } from './i.base.service'
import { EntityId } from 'typeorm/repository/EntityId'

export class BaseService<T extends BaseEntity, R extends Repository<T>> implements IBaseService<T> {
    protected readonly repository: R

    constructor(repository: R) {
        this.repository = repository
    }

    async index(): Promise<T[]> {
        return await this.repository.find()
    }

    async findById(id: EntityId): Promise<T> {
        return await this.repository.findOne(id)
    }

    async findByIds(ids: [EntityId]): Promise<T[]> {
        return await this.repository.findByIds(ids)
    }

    async store(data: any): Promise<T> {
        return await this.repository.save(data)
    }

    async update(id: EntityId, data: any): Promise<T> {
        await this.repository.update(id, data)
        return await this.findById(id)
    }

    async delete(id: EntityId): Promise<DeleteResult> {
        return await this.repository.delete(id)
    }
}