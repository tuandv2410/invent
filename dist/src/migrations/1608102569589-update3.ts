import {MigrationInterface, QueryRunner} from "typeorm";

export class update31608102569589 implements MigrationInterface {
    name = 'update31608102569589'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "business-partner" ALTER COLUMN "address" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "business-partner"."address" IS NULL`);
        await queryRunner.query(`ALTER TABLE "business-partner" ALTER COLUMN "taxInfo" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "business-partner"."taxInfo" IS NULL`);
        await queryRunner.query(`ALTER TABLE "business-partner" ALTER COLUMN "phone" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "business-partner"."phone" IS NULL`);
        await queryRunner.query(`ALTER TABLE "business-partner" ALTER COLUMN "email" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "business-partner"."email" IS NULL`);
        await queryRunner.query(`ALTER TABLE "business-partner" DROP COLUMN "discount"`);
        await queryRunner.query(`ALTER TABLE "business-partner" ADD "discount" integer`);
        await queryRunner.query(`ALTER TABLE "business-partner" ALTER COLUMN "category" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "business-partner"."category" IS NULL`);
        await queryRunner.query(`ALTER TABLE "business-partner" ALTER COLUMN "function" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "business-partner"."function" IS NULL`);
        await queryRunner.query(`ALTER TABLE "business-partner" ALTER COLUMN "status" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "business-partner"."status" IS NULL`);
        await queryRunner.query(`ALTER TABLE "adding-service" ALTER COLUMN "type" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "adding-service"."type" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "adding-service"."type" IS NULL`);
        await queryRunner.query(`ALTER TABLE "adding-service" ALTER COLUMN "type" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "business-partner"."status" IS NULL`);
        await queryRunner.query(`ALTER TABLE "business-partner" ALTER COLUMN "status" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "business-partner"."function" IS NULL`);
        await queryRunner.query(`ALTER TABLE "business-partner" ALTER COLUMN "function" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "business-partner"."category" IS NULL`);
        await queryRunner.query(`ALTER TABLE "business-partner" ALTER COLUMN "category" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "business-partner" DROP COLUMN "discount"`);
        await queryRunner.query(`ALTER TABLE "business-partner" ADD "discount" character varying NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "business-partner"."email" IS NULL`);
        await queryRunner.query(`ALTER TABLE "business-partner" ALTER COLUMN "email" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "business-partner"."phone" IS NULL`);
        await queryRunner.query(`ALTER TABLE "business-partner" ALTER COLUMN "phone" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "business-partner"."taxInfo" IS NULL`);
        await queryRunner.query(`ALTER TABLE "business-partner" ALTER COLUMN "taxInfo" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "business-partner"."address" IS NULL`);
        await queryRunner.query(`ALTER TABLE "business-partner" ALTER COLUMN "address" SET NOT NULL`);
    }

}
