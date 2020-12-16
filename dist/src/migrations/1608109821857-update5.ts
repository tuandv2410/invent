import {MigrationInterface, QueryRunner} from "typeorm";

export class update51608109821857 implements MigrationInterface {
    name = 'update51608109821857'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sku" ADD "productName" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sku" DROP COLUMN "productName"`);
    }

}
