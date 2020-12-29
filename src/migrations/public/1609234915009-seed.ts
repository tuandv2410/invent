import {MigrationInterface, QueryRunner} from "typeorm";
import {v4 as uuid } from 'uuid';
import * as bcrypt from 'bcrypt'

export class seed1609234915009 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const permissionRepo = queryRunner.connection.getRepository('permission')
        const p1 = uuid();
        const p2 = uuid();
        const p3 = uuid();
        permissionRepo.insert([
            {
                id: p1,
                name: "root",
                description: "i'm groot"
            },
            {
                id: p2,
                name: "sub-admin",
                description: "tao la sub-admin"
            },
            {
                id: p3,
                name: "normal-user",
                description: "tao la user"
            },
        ])
        const userRepo = queryRunner.connection.getRepository('user')
        const salt = await bcrypt.genSalt();
        const adminid = uuid()
        userRepo.insert([
            {
                id: adminid,
                salt: salt,
                username: "admin",
                password: await bcrypt.hash("admin", salt),
                email: "admin@n2tp.com",
            }
        ])

        const user_per_Repo = queryRunner.connection.getRepository('users-permissions')
        user_per_Repo.insert([
            {
                permissionId: p1,
                userId: adminid
            },
            {
                permissionId: p2,
                userId: adminid
            },
            {
                permissionId: p3,
                userId: adminid
            },
        ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
