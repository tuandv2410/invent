import { AutoMap } from "nestjsx-automapper";
import { PermissionEntity } from "./permission.entity";
import { UserEntity } from "./user.entity";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";

@Entity('role')
export class RoleEntity extends BaseEntity {
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

    @AutoMap(()=>PermissionEntity)
    @ManyToMany(
        type => PermissionEntity, permission => permission.roles
    )
    permissions: PermissionEntity[];

    @ManyToMany(
        type => UserEntity, user => user.roles, {
            cascade: true
        }
    )
    @JoinTable({ name: 'users-roles'})
    users: UserEntity[]

}