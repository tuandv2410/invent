import { IsNotEmpty } from 'class-validator';
import { AutoMap } from 'nestjsx-automapper';
import { mapFrom, Mapper } from '@nartc/automapper'
import { RoleEntity } from 'src/entities/public/authentication/role.entity';

class Permission {
    id : string;
    name: string;
    description: string;
}

export class RoleDto {
    @AutoMap()
    @IsNotEmpty()
    id: string;

    @AutoMap()
    @IsNotEmpty()
    name: string;

    @AutoMap()
    @IsNotEmpty()
    description: string;

    @AutoMap(()=> Permission)
    permissions: Permission[];
}

Mapper.createMap(RoleEntity, RoleDto)
.forMember(
    d=>d.permissions,
    mapFrom(s=>s.permissions)
);