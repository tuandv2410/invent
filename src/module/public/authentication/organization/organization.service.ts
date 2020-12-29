import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { OrganizationEntity } from 'src/entities/public/authentication/organization.entity';
import { OrganizationRepository } from './organization.repository';

@Injectable()
export class OrganizationService extends BaseService<OrganizationEntity, OrganizationRepository>{
    constructor(repository: OrganizationRepository) {
        super(repository)
    }
}