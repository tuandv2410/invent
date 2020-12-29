import { BaseService } from 'src/base/base.service';
import { OrganizationEntity } from 'src/entities/public/authentication/organization.entity';
import { OrganizationRepository } from './organization.repository';
export declare class OrganizationService extends BaseService<OrganizationEntity, OrganizationRepository> {
    constructor(repository: OrganizationRepository);
}
