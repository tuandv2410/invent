import {MigrationInterface, QueryRunner} from "typeorm";

export class update41608103193670 implements MigrationInterface {
    name = 'update41608103193670'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "business-partner" ALTER COLUMN "status" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "business-partner"."status" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "business-partner"."status" IS NULL`);
        await queryRunner.query(`ALTER TABLE "business-partner" ALTER COLUMN "status" DROP NOT NULL`);
    }

}
