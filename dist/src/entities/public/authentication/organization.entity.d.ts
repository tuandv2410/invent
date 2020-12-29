import { BaseEntity } from "typeorm";
import { RoleEntity } from "./role.entity";
import { UserEntity } from "./user.entity";
export declare class OrganizationEntity extends BaseEntity {
    id: string;
    name: string;
    admin: UserEntity;
    users: UserEntity;
    roles: RoleEntity;
}
