import { MigrationInterface, QueryRunner } from "typeorm";
export declare class initdb1610441693719 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
