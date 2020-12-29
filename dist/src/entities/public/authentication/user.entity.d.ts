import { BaseEntity } from "typeorm";
import { PermissionEntity } from "./permission.entity";
import { RoleEntity } from "./role.entity";
import { OrganizationEntity } from "./organization.entity";
export declare class UserEntity extends BaseEntity {
    id: string;
    username: string;
    password: string;
    email: string;
    organization: string;
    salt: string;
    permissions: PermissionEntity[];
    roles: RoleEntity[];
    adminOrg: OrganizationEntity;
    org: OrganizationEntity;
    validatePassword(userPassword: string): Promise<boolean>;
}
