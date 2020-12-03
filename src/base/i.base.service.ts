import { DeleteResult, InsertResult } from 'typeorm'

export interface IBaseService<T> {

    findByIds(id: [number]): Promise<T[]>

    get(data: any): Promise<T[]>

    store(data: any): Promise<InsertResult>

    update(id: number, data: any): Promise<T>

    delete(id: number): Promise<DeleteResult>
}