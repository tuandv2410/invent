import { IsNotEmpty, IsEmail } from 'class-validator';
import { AutoMap } from 'nestjsx-automapper';
import { PermissionDto } from 'src/epic/authentication/permission/dto/permission.dto';
import { mapFrom, Mapper } from '@nartc/automapper'
import { UserEntity } from '../../../../entities/authentication/user.entity';


class Role{
  id: string;

  name: string;

  description: string;
}

class Permission{
  id: string;

  name: string;

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

  @AutoMap(()=> Permission)
  permissions: Permission[];

  @AutoMap(()=> Role)
  roles: Role[];
}

Mapper.createMap(UserEntity, UserDto)
.forMember(
  d=>d.roles,
  mapFrom(s=>s.roles)
)
.forMember(
  d=>d.permissions,
  mapFrom(s=>s.permissions)
);