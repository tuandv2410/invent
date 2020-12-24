import { RoleEntity } from "./role.entity";
import { BaseEntity } from "typeorm";
import { UserEntity } from "./user.entity";
export declare class PermissionEntity extends BaseEntity {
    id: string;
    name: string;
    description: string;
    users: UserEntity[];
    roles: RoleEntity[];
}
