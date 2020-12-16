import {MigrationInterface, QueryRunner} from "typeorm";

export class update51608107022331 implements MigrationInterface {
    name = 'update51608107022331'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "weight" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."weight" IS NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "volume" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."volume" IS NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "category" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."category" IS NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "color" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."color" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "product"."color" IS NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "color" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."category" IS NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "category" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."volume" IS NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "volume" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."weight" IS NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "weight" SET NOT NULL`);
    }

}
