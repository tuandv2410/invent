import { BaseEntity, BeforeInsert, Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import * as bcrypt from 'bcrypt'
import { PermissionEntity } from "./permission.entity";
import { AutoMap } from "nestjsx-automapper";
import { RoleEntity } from "./role.entity";
import { OrganizationEntity } from "./organization.entity";

@Entity('user')
export class UserEntity extends BaseEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string;

    @AutoMap()
    @Column({
        nullable: false,
        unique: true
    })
    username: string;

    @Column({
        nullable: false,
    })
    password: string;

    @AutoMap()
    @Column({
        nullable: false,
        unique: true
    })
    email: string;

    @AutoMap()
    @Column({
        nullable: true,
    })
    organization: string;

    @Column({
        nullable: false,
    })
    salt: string;

    @AutoMap(()=>PermissionEntity)
    @ManyToMany(
        type => PermissionEntity, permission => permission.users
    )
    permissions: PermissionEntity[];

    @AutoMap(()=>RoleEntity)
    @ManyToMany(
        type => RoleEntity, role => role.users
    )
    roles: RoleEntity[];

    @AutoMap(()=>OrganizationEntity)
    @OneToOne(type => OrganizationEntity, organization => organization.admin, {
        cascade: true
    })
    @JoinColumn()
    adminOrg: OrganizationEntity;
    
    @ManyToOne(type => OrganizationEntity, organization => organization.users, {
        cascade: true
    })
    org: OrganizationEntity;

    async validatePassword(userPassword: string): Promise<boolean> {
        const hash = await bcrypt.hash(userPassword, this.salt);
        return hash === this.password;
    }


}