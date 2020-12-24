import { BaseService } from 'src/base/base.service';
import { AddingServiceEntity } from 'src/entities/tenant/business/adding-service.entity';
import { AddingServiceRepository } from './adding-service.repository';
export declare class AddingServiceService extends BaseService<AddingServiceEntity, AddingServiceRepository> {
    private connection;
    constructor(repository: AddingServiceRepository, connection: any);
}
