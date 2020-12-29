"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed1609234915009 = void 0;
const uuid_1 = require("uuid");
const bcrypt = require("bcrypt");
class seed1609234915009 {
    async up(queryRunner) {
        const permissionRepo = queryRunner.connection.getRepository('permission');
        const p1 = uuid_1.v4();
        const p2 = uuid_1.v4();
        const p3 = uuid_1.v4();
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
        ]);
        const userRepo = queryRunner.connection.getRepository('user');
        const salt = await bcrypt.genSalt();
        const adminid = uuid_1.v4();
        userRepo.insert([
            {
                id: adminid,
                salt: salt,
                username: "admin",
                password: await bcrypt.hash("admin", salt),
                email: "admin@n2tp.com",
            }
        ]);
        const user_per_Repo = queryRunner.connection.getRepository('users-permissions');
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
        ]);
    }
    async down(queryRunner) {
    }
}
exports.seed1609234915009 = seed1609234915009;
//# sourceMappingURL=1609234915009-seed.js.map