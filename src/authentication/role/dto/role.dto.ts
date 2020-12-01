import { IsString, MinLength, MaxLength, IsNotEmpty, IsNumber } from 'class-validator';
import { AutoMap } from 'nestjsx-automapper';

import { mapFrom, Mapper } from '@nartc/automapper'
import { PermissionDto } from 'src/authentication/permission/dto/permission.dto';
import { RoleEntity } from 'src/entities/authentication/role.entity';

export class RoleDto {
    @AutoMap()
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @AutoMap()
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    name: string;

    @AutoMap()
    @IsNotEmpty()
    @IsString()
    description: string;

    @AutoMap(()=> PermissionDto)
    permissionsDto: PermissionDto[];
}

Mapper.createMap(RoleEntity, RoleDto).forMember(
    d=>d.permissionsDto,
    mapFrom(s=>s.permissions)
  );