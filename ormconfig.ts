module.exports = {
    type: 'postgres',
    host: "localhost",
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    migrationsRun: true,
    entities: [
        'dist/src/entities/public/**/*.entity{.ts,.js}'
    ],
    
    migrations: [
        'src/migrations/public/*{.ts,.js}',
    ],
    cli: {
        migrationsDir: 'src/migrations/public',
    },
};