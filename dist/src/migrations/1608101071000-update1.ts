import {MigrationInterface, QueryRunner} from "typeorm";

export class update11608101071000 implements MigrationInterface {
    name = 'update11608101071000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adding-service" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "adding-service" ADD "price" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adding-service" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "adding-service" ADD "price" character varying NOT NULL`);
    }

}
