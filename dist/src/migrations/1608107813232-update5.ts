import {MigrationInterface, QueryRunner} from "typeorm";

export class update51608107813232 implements MigrationInterface {
    name = 'update51608107813232'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "packging-material" ALTER COLUMN "tareWeight" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "packging-material"."tareWeight" IS NULL`);
        await queryRunner.query(`ALTER TABLE "packging-material" DROP COLUMN "tareVolume"`);
        await queryRunner.query(`ALTER TABLE "packging-material" ADD "tareVolume" integer`);
        await queryRunner.query(`ALTER TABLE "packging-material" DROP COLUMN "capacities"`);
        await queryRunner.query(`ALTER TABLE "packging-material" ADD "capacities" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "packging-material" DROP COLUMN "capacities"`);
        await queryRunner.query(`ALTER TABLE "packging-material" ADD "capacities" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "packging-material" DROP COLUMN "tareVolume"`);
        await queryRunner.query(`ALTER TABLE "packging-material" ADD "tareVolume" character varying NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "packging-material"."tareWeight" IS NULL`);
        await queryRunner.query(`ALTER TABLE "packging-material" ALTER COLUMN "tareWeight" SET NOT NULL`);
    }

}
