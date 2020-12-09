import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { InsertResult } from 'typeorm'

export interface IBaseService<T> {

    findByIds(id: [string]): Promise<T[]>

    get(data: any): Promise<T[]>

    getWithRelations(data: any): Promise<T[]>

    store(data: any): Promise<InsertResult>

    update(id: string, data: any): Promise<T>

    delete(id: string): Promise<DeleteResultInterface>
}