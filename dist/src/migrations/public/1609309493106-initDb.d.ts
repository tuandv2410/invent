import { MigrationInterface, QueryRunner } from "typeorm";
export declare class initDb1609309493106 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
