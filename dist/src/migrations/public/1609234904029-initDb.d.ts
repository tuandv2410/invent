import { MigrationInterface, QueryRunner } from "typeorm";
export declare class initDb1609234904029 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
