import { AutoMap } from "nestjsx-automapper";
import { BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { RoleEntity } from "./role.entity";
import { UserEntity } from "./user.entity";

@Entity('organization')
export class OrganizationEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column({
        nullable: false,
        unique: true
    })
    name: string;

    @AutoMap(()=>UserEntity)
    @OneToOne(type => UserEntity, admin => admin.adminOrg)
    admin: UserEntity;

    @AutoMap(()=>UserEntity)
    @OneToMany(type => UserEntity, user => user.org)
    users: UserEntity;

    @AutoMap(()=>RoleEntity)
    @OneToMany(type => RoleEntity, role => role.organization)
    roles: RoleEntity;

}