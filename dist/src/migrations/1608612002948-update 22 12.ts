import {MigrationInterface, QueryRunner} from "typeorm";

export class update22121608612002948 implements MigrationInterface {
    name = 'update22121608612002948'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sku" DROP CONSTRAINT "FK_b45cf051ab6f88a0db957e5a397"`);
        await queryRunner.query(`ALTER TABLE "sku" ALTER COLUMN "productId" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "sku"."productId" IS NULL`);
        await queryRunner.query(`ALTER TABLE "sku" ADD CONSTRAINT "FK_b45cf051ab6f88a0db957e5a397" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sku" DROP CONSTRAINT "FK_b45cf051ab6f88a0db957e5a397"`);
        await queryRunner.query(`COMMENT ON COLUMN "sku"."productId" IS NULL`);
        await queryRunner.query(`ALTER TABLE "sku" ALTER COLUMN "productId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sku" ADD CONSTRAINT "FK_b45cf051ab6f88a0db957e5a397" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
