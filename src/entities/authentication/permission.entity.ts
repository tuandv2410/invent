import { RoleEntity } from "./role.entity";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { AutoMap } from "nestjsx-automapper";

import { UserEntity } from "./user.entity";

@Entity('permission')
export class PermissionEntity extends BaseEntity {
    @AutoMap()
    @PrimaryGeneratedColumn()
    id: number;

    @AutoMap()
    @Column({
        type: 'varchar',
        nullable: false,
        unique: true
    })
    name: string;

    @AutoMap()
    @Column({
        type: 'varchar',
        nullable: false,
    })
    description: string;

    @AutoMap()
    @ManyToMany(
        type => UserEntity, user => user.permissions, {
            cascade: true
        }
    )
    @JoinTable()
    users: UserEntity[]

    @AutoMap()
    @ManyToMany(
        type => RoleEntity, role => role.permissions, {
            cascade: true
        }
    )
    @JoinTable()
    roles: RoleEntity[]
}