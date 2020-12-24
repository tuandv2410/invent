import { HttpException, HttpStatus } from '@nestjs/common'
import { DeleteResultInterface } from 'src/interfaces/delete-result.interface'
import { BaseEntity, DeleteResult, InsertResult, Repository } from 'typeorm'
import { IBaseService } from './i.base.service'

export class BaseService<T extends BaseEntity, R extends Repository<T>> implements IBaseService<T> {
    protected repository: R

    constructor(repository: R) {
        this.repository = repository
    }


    findById(id: string): Promise<T> {
        try{
            return this.repository.findOne(id)
        }catch(error) {
            throw new HttpException(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    findByIds(ids: string[]): Promise<T[]> {
        try{
            return this.repository.findByIds(ids)
        }catch(error) {
            throw new HttpException(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    get(data: any): Promise<T[]> { 
        try{
            return this.repository.find({where:data})
        }catch(error) {
            throw new HttpException(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    getWithRelations(data: any): Promise<T[]> {
        try {
            const relations = this.repository.metadata.relations.map(m => m.propertyName);
            
            return this.repository.find({
                relations,
                where: data
            });
        }catch(error) {
            throw new HttpException(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    async loadRelationships(repo: Repository<any>, relationships: string[], baseEntities?: any[]) {
        if (!baseEntities) {
            baseEntities = await repo.find({});	
            
        }
    
        const { ...res } = await Promise.all(
            relationships.map((relation) => {
                return repo.findByIds(
                    baseEntities.map((entity) => {
                        if (!entity || !entity.id) return;
                        return entity.id;
                    }),
                    {
                        select: ['id'],
                        relations: [relation]
                    }
                );
            })
        );

        console.log(res);
            
        Object.keys(res).forEach(i => {
            res[i].forEach(r => {
                const fullEntity = baseEntities.find(e => e.id === r.id);
                if (fullEntity) {
                    const relationship = relationships[i];
                    fullEntity[relationship] = r[relationship];
                }
                return fullEntity
            });
        });

        return res;
    }


    store(data: any): Promise<InsertResult> {
        try{
            return this.repository.save(data)
        }catch(error) {
            throw new HttpException(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async update(id: string, data: any): Promise<T> {
        try{
            const inDb = await this.repository.findOne(id);
            if(!inDb){
                throw new HttpException(`Id ${id} not found!`, HttpStatus.NOT_FOUND);
            }
            await this.repository.update(id, data)
            return await this.repository.findOne(id)
        }catch(error) {
            throw new HttpException(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async delete(id: string): Promise<DeleteResultInterface> {
        let status: DeleteResultInterface = {
            succes: true,
            message: 'delete success',
        };
        try {
            const result:DeleteResult = await this.repository.delete(id)
            if(result.affected === 0){
                throw new HttpException(`ID ${id} not found!`, HttpStatus.NOT_FOUND);
            }
        } catch(error) {
            status = {
                succes: false,
                message: error,
            };
        }
        return status
    }
}