"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed1610443679715 = void 0;
const uuid_1 = require("uuid");
const bcrypt = require("bcrypt");
class seed1610443679715 {
    async up(queryRunner) {
        const organizationRepo = queryRunner.connection.getRepository('organization');
        organizationRepo.insert([
            {
                id: uuid_1.v4(),
                name: "schema_example"
            }
        ]);
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
exports.seed1610443679715 = seed1610443679715;
//# sourceMappingURL=1610443679715-seed.js.map