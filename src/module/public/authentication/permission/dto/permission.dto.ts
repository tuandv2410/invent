import { IsNotEmpty } from 'class-validator';
import { AutoMap } from 'nestjsx-automapper';
import { mapFrom, Mapper } from '@nartc/automapper'
import { PermissionEntity } from 'src/entities/public/authentication/permission.entity';

class Role {
    id: string;
    name: string;
    description: string;
}

export class PermissionDto {
    @AutoMap()
    @IsNotEmpty()
    id: string;

    @AutoMap()
    @IsNotEmpty()
    name: string;

    @AutoMap()
    @IsNotEmpty()
    description: string;

    @AutoMap()
    @IsNotEmpty()
    roles: Role[];
}

Mapper.createMap(PermissionEntity, PermissionDto)
.forMember(
    d=>d.roles,
    mapFrom(s=>s.roles)
)