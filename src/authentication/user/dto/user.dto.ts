import { IsNotEmpty, IsEmail } from 'class-validator';
import { AutoMap } from 'nestjsx-automapper';
import { PermissionDto } from 'src/authentication/permission/dto/permission.dto';
import { mapFrom, Mapper } from '@nartc/automapper'
import { UserEntity } from '../../../entities/authentication/user.entity';


export class role{
  @AutoMap()
  id: number;

  @AutoMap()
  name: string;

  @AutoMap()
  description: string;
}

export class UserDto {
  @AutoMap()
  @IsNotEmpty()
  id: number;

  @AutoMap()
  @IsNotEmpty()
  username: string;

  @AutoMap()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @AutoMap()
  @IsNotEmpty()
  organization: string;

  @AutoMap(()=> PermissionDto)
  permissionsDto: PermissionDto[];

  @AutoMap(()=> role)
  rolesDto: role[];
}

Mapper.createMap(UserEntity, UserDto)
.forMember(
  d=>d.rolesDto,
  mapFrom(s=>s.roles)
)
.forMember(
  d=>d.permissionsDto,
  mapFrom(s=>s.permissions)
);