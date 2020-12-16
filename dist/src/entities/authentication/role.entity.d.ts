import { PermissionEntity } from "./permission.entity";
import { UserEntity } from "./user.entity";
import { BaseEntity } from "typeorm";
export declare class RoleEntity extends BaseEntity {
    id: number;
    name: string;
    description: string;
    permissions: PermissionEntity[];
    users: UserEntity[];
}
