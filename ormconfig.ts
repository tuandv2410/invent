module.exports = {
    type: 'postgres',
    host: "localhost",
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    migrationsRun: true,
    entities: [
        'dist/**/**/**/*.entity.js'
    ],
    migrations: [
        'dist/src/migrations/*.ts',
    ],
    cli: {
        migrationsDir: 'dist/src/migrations',
    },
};
  