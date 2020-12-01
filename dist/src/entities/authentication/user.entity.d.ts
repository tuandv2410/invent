import { BaseEntity } from "typeorm";
import { PermissionEntity } from "./permission.entity";
import { RoleEntity } from "./role.entity";
export declare class UserEntity extends BaseEntity {
    id: number;
    username: string;
    password: string;
    email: string;
    organization: string;
    salt: string;
    permissions: PermissionEntity[];
    roles: RoleEntity[];
    validatePassword(userPassword: string): Promise<boolean>;
}
