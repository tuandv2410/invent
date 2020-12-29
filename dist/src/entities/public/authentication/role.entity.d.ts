import { PermissionEntity } from "./permission.entity";
import { UserEntity } from "./user.entity";
import { BaseEntity } from "typeorm";
import { OrganizationEntity } from "./organization.entity";
export declare class RoleEntity extends BaseEntity {
    id: string;
    name: string;
    description: string;
    permissions: PermissionEntity[];
    users: UserEntity[];
    organization: OrganizationEntity;
}
