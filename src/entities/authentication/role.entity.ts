import { AutoMap } from "nestjsx-automapper";
import { PermissionEntity } from "./permission.entity";
import { UserEntity } from "./user.entity";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('role')
export class RoleEntity extends BaseEntity {
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
    @JoinTable()
    users: UserEntity[]

}