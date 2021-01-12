import { IsNotEmpty } from 'class-validator';
import { AutoMap } from 'nestjsx-automapper';
import { Mapper } from '@nartc/automapper'
import { OrganizationEntity } from 'src/entities/public/authentication/organization.entity';

export class OrganizationDto {
    @AutoMap()
    @IsNotEmpty()
    id: string;

    @AutoMap()
    @IsNotEmpty()
    name: string;

}

Mapper.createMap(OrganizationEntity, OrganizationDto)