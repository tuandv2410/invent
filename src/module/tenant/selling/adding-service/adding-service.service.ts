import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { AddingServiceEntity } from 'src/entities/tenant/business/adding-service.entity';
import { AddingServiceRepository } from './adding-service.repository';

@Injectable()
export class AddingServiceService extends BaseService<AddingServiceEntity, AddingServiceRepository>{
    constructor(
        repository: AddingServiceRepository,
        @Inject('CONNECTION') private connection
    ) {
        super(repository)
        this.repository = this.connection.getRepository(AddingServiceEntity);
    }
}