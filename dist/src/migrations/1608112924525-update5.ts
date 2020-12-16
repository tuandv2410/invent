import {MigrationInterface, QueryRunner} from "typeorm";

export class update51608112924525 implements MigrationInterface {
    name = 'update51608112924525'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "storage-section" DROP COLUMN "description"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "storage-section" ADD "description" character varying NOT NULL`);
    }

}
