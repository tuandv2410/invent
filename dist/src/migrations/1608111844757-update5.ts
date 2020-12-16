import {MigrationInterface, QueryRunner} from "typeorm";

export class update51608111844757 implements MigrationInterface {
    name = 'update51608111844757'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "storage-type" DROP COLUMN "areaType"`);
        await queryRunner.query(`ALTER TABLE "storage-type" ADD "areaType" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "storage-bin" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "storage-bin" ADD "type" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "storage-bin" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "storage-bin" ADD "type" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "storage-type" DROP COLUMN "areaType"`);
        await queryRunner.query(`ALTER TABLE "storage-type" ADD "areaType" integer NOT NULL`);
    }

}
