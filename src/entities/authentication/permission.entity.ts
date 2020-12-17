import { RoleEntity } from "./role.entity";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";

import { UserEntity } from "./user.entity";

@Entity('permission')
export class PermissionEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column({
        nullable: false,
        unique: true
    })
    name: string;

    @AutoMap()
    @Column({
        nullable: false,
    })
    description: string;

    @AutoMap()
    @ManyToMany(
        type => UserEntity, user => user.permissions, {
            cascade: true
        }
    )
    @JoinTable({ name: 'users-permissions'})
    users: UserEntity[]

    @AutoMap()
    @ManyToMany(
        type => RoleEntity, role => role.permissions, {
            cascade: true
        }
    )
    @JoinTable({ name: 'roles-permissions'})
    roles: RoleEntity[]
}