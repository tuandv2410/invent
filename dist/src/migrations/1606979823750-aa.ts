import {MigrationInterface, QueryRunner} from "typeorm";

export class aa1606979823750 implements MigrationInterface {
    name = 'aa1606979823750'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "organization" character varying NOT NULL, "salt" character varying NOT NULL, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "UQ_ae4578dcaed5adff96595e61660" UNIQUE ("name"), CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "permission" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "UQ_240853a0c3353c25fb12434ad33" UNIQUE ("name"), CONSTRAINT "PK_3b8b97af9d9d8807e41e6f48362" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "business-contract" ("id" SERIAL NOT NULL, "create_date" character varying NOT NULL, "money_value" integer NOT NULL, CONSTRAINT "PK_c571d60b3b27ab1f5d808f70a89" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "business-partner" ("id" SERIAL NOT NULL, "fullName" character varying NOT NULL, "category" character varying NOT NULL, "function" character varying NOT NULL, "status" character varying NOT NULL, CONSTRAINT "UQ_e73040bbf90f8a854eabc1f2a73" UNIQUE ("fullName"), CONSTRAINT "PK_ae055f00145db564631b3a4c05c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order" ("id" SERIAL NOT NULL, "createDate" character varying NOT NULL, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "payment" ("id" SERIAL NOT NULL, "value" integer NOT NULL, "status" character varying NOT NULL, "date" character varying NOT NULL, CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role_users_user" ("roleId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_46403d6ce64cde119287c876ca3" PRIMARY KEY ("roleId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ed6edac7184b013d4bd58d60e5" ON "role_users_user" ("roleId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a88fcb405b56bf2e2646e9d479" ON "role_users_user" ("userId") `);
        await queryRunner.query(`CREATE TABLE "permission_users_user" ("permissionId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_c03113665ef5a1c2258b47ad805" PRIMARY KEY ("permissionId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a68535c371c96a600abe56090b" ON "permission_users_user" ("permissionId") `);
        await queryRunner.query(`CREATE INDEX "IDX_bc69d573e16cfac073d1a1aeed" ON "permission_users_user" ("userId") `);
        await queryRunner.query(`CREATE TABLE "permission_roles_role" ("permissionId" integer NOT NULL, "roleId" integer NOT NULL, CONSTRAINT "PK_534958b0063b8ad39335d7bcfd0" PRIMARY KEY ("permissionId", "roleId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9f44b6228b173c7b9dfb8c6600" ON "permission_roles_role" ("permissionId") `);
        await queryRunner.query(`CREATE INDEX "IDX_7ec93d4fbf75b063f3ffd2646a" ON "permission_roles_role" ("roleId") `);
        await queryRunner.query(`ALTER TABLE "role_users_user" ADD CONSTRAINT "FK_ed6edac7184b013d4bd58d60e54" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "role_users_user" ADD CONSTRAINT "FK_a88fcb405b56bf2e2646e9d4797" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "permission_users_user" ADD CONSTRAINT "FK_a68535c371c96a600abe56090b7" FOREIGN KEY ("permissionId") REFERENCES "permission"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "permission_users_user" ADD CONSTRAINT "FK_bc69d573e16cfac073d1a1aeedc" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "permission_roles_role" ADD CONSTRAINT "FK_9f44b6228b173c7b9dfb8c66003" FOREIGN KEY ("permissionId") REFERENCES "permission"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "permission_roles_role" ADD CONSTRAINT "FK_7ec93d4fbf75b063f3ffd2646a5" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "permission_roles_role" DROP CONSTRAINT "FK_7ec93d4fbf75b063f3ffd2646a5"`);
        await queryRunner.query(`ALTER TABLE "permission_roles_role" DROP CONSTRAINT "FK_9f44b6228b173c7b9dfb8c66003"`);
        await queryRunner.query(`ALTER TABLE "permission_users_user" DROP CONSTRAINT "FK_bc69d573e16cfac073d1a1aeedc"`);
        await queryRunner.query(`ALTER TABLE "permission_users_user" DROP CONSTRAINT "FK_a68535c371c96a600abe56090b7"`);
        await queryRunner.query(`ALTER TABLE "role_users_user" DROP CONSTRAINT "FK_a88fcb405b56bf2e2646e9d4797"`);
        await queryRunner.query(`ALTER TABLE "role_users_user" DROP CONSTRAINT "FK_ed6edac7184b013d4bd58d60e54"`);
        await queryRunner.query(`DROP INDEX "IDX_7ec93d4fbf75b063f3ffd2646a"`);
        await queryRunner.query(`DROP INDEX "IDX_9f44b6228b173c7b9dfb8c6600"`);
        await queryRunner.query(`DROP TABLE "permission_roles_role"`);
        await queryRunner.query(`DROP INDEX "IDX_bc69d573e16cfac073d1a1aeed"`);
        await queryRunner.query(`DROP INDEX "IDX_a68535c371c96a600abe56090b"`);
        await queryRunner.query(`DROP TABLE "permission_users_user"`);
        await queryRunner.query(`DROP INDEX "IDX_a88fcb405b56bf2e2646e9d479"`);
        await queryRunner.query(`DROP INDEX "IDX_ed6edac7184b013d4bd58d60e5"`);
        await queryRunner.query(`DROP TABLE "role_users_user"`);
        await queryRunner.query(`DROP TABLE "payment"`);
        await queryRunner.query(`DROP TABLE "order"`);
        await queryRunner.query(`DROP TABLE "business-partner"`);
        await queryRunner.query(`DROP TABLE "business-contract"`);
        await queryRunner.query(`DROP TABLE "permission"`);
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
