import {MigrationInterface, QueryRunner} from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export class reaname1610444211290 implements MigrationInterface {
    name = 'reaname1610444211290'

    public async up(queryRunner: QueryRunner): Promise<void> {
        const {schema} = queryRunner.connection.options as PostgresConnectionOptions;
        await queryRunner.query(`ALTER TABLE "${schema}"."product-selling-contract" RENAME COLUMN "totalPricr" TO "totalPrice"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."product-selling-order" RENAME COLUMN "totalPricr" TO "totalPrice"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const {schema} = queryRunner.connection.options as PostgresConnectionOptions;
        await queryRunner.query(`ALTER TABLE "${schema}"."product-selling-order" RENAME COLUMN "totalPrice" TO "totalPricr"`);
        await queryRunner.query(`ALTER TABLE "${schema}"."product-selling-contract" RENAME COLUMN "totalPrice" TO "totalPricr"`);
    }

}
