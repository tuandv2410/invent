import {MigrationInterface, QueryRunner} from "typeorm";

export class update41608102975128 implements MigrationInterface {
    name = 'update41608102975128'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adding-service" ALTER COLUMN "type" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "adding-service"."type" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "adding-service"."type" IS NULL`);
        await queryRunner.query(`ALTER TABLE "adding-service" ALTER COLUMN "type" DROP NOT NULL`);
    }

}
