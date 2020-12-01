import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt'
import { PermissionEntity } from "./permission.entity";
import { AutoMap } from "nestjsx-automapper";
import { RoleEntity } from "./role.entity";

@Entity('user')
export class UserEntity extends BaseEntity {
    @AutoMap()
    @PrimaryGeneratedColumn()
    id: number;

    @AutoMap()
    @Column({
        type: 'varchar',
        nullable: false,
        unique: true
    })
    username: string;

    @Column({
        type: 'varchar',
        nullable: false,
    })
    password: string;

    @AutoMap()
    @Column({
        type: 'varchar',
        nullable: false,
        unique: true
    })
    email: string;

    @AutoMap()
    @Column({
        type: 'varchar',
        nullable: false,
    })
    organization: string;

    @Column({
        type: 'varchar',
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
    
    async validatePassword(userPassword: string): Promise<boolean> {
        const hash = await bcrypt.hash(userPassword, this.salt);
        return hash === this.password;
    }
}