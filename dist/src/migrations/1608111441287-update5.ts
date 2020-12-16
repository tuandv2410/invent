import {MigrationInterface, QueryRunner} from "typeorm";

export class update51608111441287 implements MigrationInterface {
    name = 'update51608111441287'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "activity-area" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "warehouse" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "storage-section" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "storage-type" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "storage-bin" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "storage-type" DROP COLUMN "areaType"`);
        await queryRunner.query(`ALTER TABLE "storage-type" ADD "areaType" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "storage-bin" DROP COLUMN "maxWeight"`);
        await queryRunner.query(`ALTER TABLE "storage-bin" ADD "maxWeight" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "storage-bin" DROP COLUMN "totalCapicity"`);
        await queryRunner.query(`ALTER TABLE "storage-bin" ADD "totalCapicity" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "storage-bin" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "storage-bin" ADD "type" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "storage-bin" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "storage-bin" ADD "type" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "storage-bin" DROP COLUMN "totalCapicity"`);
        await queryRunner.query(`ALTER TABLE "storage-bin" ADD "totalCapicity" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "storage-bin" DROP COLUMN "maxWeight"`);
        await queryRunner.query(`ALTER TABLE "storage-bin" ADD "maxWeight" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "storage-type" DROP COLUMN "areaType"`);
        await queryRunner.query(`ALTER TABLE "storage-type" ADD "areaType" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "storage-bin" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "storage-type" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "storage-section" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "warehouse" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "activity-area" DROP COLUMN "name"`);
    }

}
