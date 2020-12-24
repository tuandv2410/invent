"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_schema = void 0;
const typeorm_1 = require("typeorm");
const schemalist_1 = require("./schemalist");
async function create_schema() {
    const schemaList = schemalist_1.schema_list;
    for (let i = 0; i < schemaList.length; i++) {
        const schemaName = schemaList[i];
        await typeorm_1.getManager().query(`CREATE SCHEMA IF NOT EXISTS "${schemaName}";`);
        const connec = typeorm_1.createConnection({
            type: 'postgres',
            host: process.env.POSTGRES_SERVER,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            migrationsRun: true,
            entities: [
                'dist/src/entities/tenant/**/*.entity{.ts,.js}'
            ],
            migrations: [
                'dist/src/migrations/tenant/*{.ts,.js}',
            ],
            cli: {
                migrationsDir: 'dist/src/migrations/tenant',
            },
            name: schemaName,
            schema: schemaName,
        });
        await (await connec).close();
    }
}
exports.create_schema = create_schema;
//# sourceMappingURL=create_schema.js.map