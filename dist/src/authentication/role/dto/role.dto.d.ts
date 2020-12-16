import { PermissionDto } from 'src/authentication/permission/dto/permission.dto';
export declare class RoleDto {
    id: number;
    name: string;
    description: string;
    permissionsDto: PermissionDto[];
}
