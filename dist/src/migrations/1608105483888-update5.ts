import {MigrationInterface, QueryRunner} from "typeorm";

export class update51608105483888 implements MigrationInterface {
    name = 'update51608105483888'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "shipment" DROP COLUMN "quantity"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "shipment" ADD "quantity" integer NOT NULL`);
    }

}
