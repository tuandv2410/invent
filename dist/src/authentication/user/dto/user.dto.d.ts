import { PermissionDto } from 'src/authentication/permission/dto/permission.dto';
export declare class role {
    id: number;
    name: string;
    description: string;
}
export declare class UserDto {
    id: number;
    username: string;
    email: string;
    organization: string;
    permissionsDto: PermissionDto[];
    rolesDto: role[];
}
