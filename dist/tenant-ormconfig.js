module.exports = {
    type: 'postgres',
    host: "localhost",
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    migrationsRun: true,
    schema: 'team_example',
    entities: [
        'dist/src/entities/tenant/**/*.entity{.ts,.js}'
    ],
    migrations: [
        'src/migrations/tenant/*{.ts,.js}',
    ],
    cli: {
        migrationsDir: 'src/migrations/tenant',
    },
};
//# sourceMappingURL=tenant-ormconfig.js.map