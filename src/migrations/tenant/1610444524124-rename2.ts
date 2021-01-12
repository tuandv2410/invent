import {MigrationInterface, QueryRunner} from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export class rename21610444524124 implements MigrationInterface {
    name = 'rename21610444524124'

    public async up(queryRunner: QueryRunner): Promise<void> {
        const {schema} = queryRunner.connection.options as PostgresConnectionOptions;
        await queryRunner.query(`ALTER TABLE "${schema}"."selling-shipment" RENAME COLUMN "receivedDate" TO "deliveryDate"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const {schema} = queryRunner.connection.options as PostgresConnectionOptions;
        await queryRunner.query(`ALTER TABLE "${schema}"."selling-shipment" RENAME COLUMN "deliveryDate" TO "receivedDate"`);
    }

}
