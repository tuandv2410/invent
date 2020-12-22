import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { AddingServiceEntity } from 'src/entities/business/adding-service.entity';
import { AddingServiceRepository } from './adding-service.repository';

@Injectable()
export class AddingServiceService extends BaseService<AddingServiceEntity, AddingServiceRepository>{
    constructor(
        repository: AddingServiceRepository,
    ) {
        super(repository)
    }
}