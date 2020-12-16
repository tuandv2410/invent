import {MigrationInterface, QueryRunner} from "typeorm";

export class update51608109108976 implements MigrationInterface {
    name = 'update51608109108976'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "handling-unit" ADD "parentId" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "handling-unit" DROP COLUMN "parentId"`);
    }

}
