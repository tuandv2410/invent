import {MigrationInterface, QueryRunner} from "typeorm";

export class initdb1608800516581 implements MigrationInterface {
    name = 'initdb1608800516581'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" character varying NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "organization" character varying NOT NULL, "salt" character varying NOT NULL, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role" ("id" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "UQ_ae4578dcaed5adff96595e61660" UNIQUE ("name"), CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "permission" ("id" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "UQ_240853a0c3353c25fb12434ad33" UNIQUE ("name"), CONSTRAINT "PK_3b8b97af9d9d8807e41e6f48362" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users-roles" ("roleId" character varying NOT NULL, "userId" character varying NOT NULL, CONSTRAINT "PK_508d09eceb609df50c9db1bf091" PRIMARY KEY ("roleId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_20a60c6d2c411efd64c03f1c18" ON "users-roles" ("roleId") `);
        await queryRunner.query(`CREATE INDEX "IDX_31a501745e81f745003c39716a" ON "users-roles" ("userId") `);
        await queryRunner.query(`CREATE TABLE "users-permissions" ("permissionId" character varying NOT NULL, "userId" character varying NOT NULL, CONSTRAINT "PK_152289beb892a025b91a26437c6" PRIMARY KEY ("permissionId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_48594314464c91efc4fd2a4fac" ON "users-permissions" ("permissionId") `);
        await queryRunner.query(`CREATE INDEX "IDX_b7a150c896bfcb0518ca2a6023" ON "users-permissions" ("userId") `);
        await queryRunner.query(`CREATE TABLE "roles-permissions" ("permissionId" character varying NOT NULL, "roleId" character varying NOT NULL, CONSTRAINT "PK_60e14e722fa98bb64c1748b7474" PRIMARY KEY ("permissionId", "roleId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_889ad75d3b742bc57893e4c45f" ON "roles-permissions" ("permissionId") `);
        await queryRunner.query(`CREATE INDEX "IDX_7b38f2a9c5cdb8832c4c9680d4" ON "roles-permissions" ("roleId") `);
        await queryRunner.query(`ALTER TABLE "users-roles" ADD CONSTRAINT "FK_20a60c6d2c411efd64c03f1c18f" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users-roles" ADD CONSTRAINT "FK_31a501745e81f745003c39716a8" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users-permissions" ADD CONSTRAINT "FK_48594314464c91efc4fd2a4facc" FOREIGN KEY ("permissionId") REFERENCES "permission"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users-permissions" ADD CONSTRAINT "FK_b7a150c896bfcb0518ca2a60233" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "roles-permissions" ADD CONSTRAINT "FK_889ad75d3b742bc57893e4c45fe" FOREIGN KEY ("permissionId") REFERENCES "permission"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "roles-permissions" ADD CONSTRAINT "FK_7b38f2a9c5cdb8832c4c9680d41" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roles-permissions" DROP CONSTRAINT "FK_7b38f2a9c5cdb8832c4c9680d41"`);
        await queryRunner.query(`ALTER TABLE "roles-permissions" DROP CONSTRAINT "FK_889ad75d3b742bc57893e4c45fe"`);
        await queryRunner.query(`ALTER TABLE "users-permissions" DROP CONSTRAINT "FK_b7a150c896bfcb0518ca2a60233"`);
        await queryRunner.query(`ALTER TABLE "users-permissions" DROP CONSTRAINT "FK_48594314464c91efc4fd2a4facc"`);
        await queryRunner.query(`ALTER TABLE "users-roles" DROP CONSTRAINT "FK_31a501745e81f745003c39716a8"`);
        await queryRunner.query(`ALTER TABLE "users-roles" DROP CONSTRAINT "FK_20a60c6d2c411efd64c03f1c18f"`);
        await queryRunner.query(`DROP INDEX "IDX_7b38f2a9c5cdb8832c4c9680d4"`);
        await queryRunner.query(`DROP INDEX "IDX_889ad75d3b742bc57893e4c45f"`);
        await queryRunner.query(`DROP TABLE "roles-permissions"`);
        await queryRunner.query(`DROP INDEX "IDX_b7a150c896bfcb0518ca2a6023"`);
        await queryRunner.query(`DROP INDEX "IDX_48594314464c91efc4fd2a4fac"`);
        await queryRunner.query(`DROP TABLE "users-permissions"`);
        await queryRunner.query(`DROP INDEX "IDX_31a501745e81f745003c39716a"`);
        await queryRunner.query(`DROP INDEX "IDX_20a60c6d2c411efd64c03f1c18"`);
        await queryRunner.query(`DROP TABLE "users-roles"`);
        await queryRunner.query(`DROP TABLE "permission"`);
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
