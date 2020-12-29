import { createConnection, getManager } from "typeorm";

export async function create_schema(schemaName:string) {
  await getManager().query(`CREATE SCHEMA IF NOT EXISTS "${schemaName}";`);
  
  const connec = createConnection({
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
  })
  await (await connec).close() 
}