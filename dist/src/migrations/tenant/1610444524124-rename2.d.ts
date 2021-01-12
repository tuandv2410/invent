import { MigrationInterface, QueryRunner } from "typeorm";
export declare class rename21610444524124 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
