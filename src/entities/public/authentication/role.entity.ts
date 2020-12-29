import { AutoMap } from "nestjsx-automapper";
import { PermissionEntity } from "./permission.entity";
import { UserEntity } from "./user.entity";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { OrganizationEntity } from "./organization.entity";

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

    @ManyToOne(type => OrganizationEntity, organization => organization.roles, {
        cascade: true
    })
    organization: OrganizationEntity;

}