import { Global, Module, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { createConnection, getConnectionManager } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

const connectionFactory = {
  provide: 'CONNECTION',
  scope: Scope.REQUEST,
  useFactory: async (req) => {
    const teamId = req.headers['schema']
    if (teamId) {
      const connectionName = `${teamId}`;
      const connectionManager = getConnectionManager();

      if (connectionManager.has(connectionName)) {
        const connection = connectionManager.get(connectionName);
        return Promise.resolve(connection.isConnected ? connection : connection.connect());
      }

      return createConnection({
        type: 'postgres',
        host: process.env.POSTGRES_SERVER,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        entities: [
          'dist/src/entities/tenant/**/*.entity{.ts,.js}'
        ],
        name: connectionName,
        schema: connectionName
      });
    }
  },
  inject: [REQUEST]
};

@Global()
@Module({
  providers: [connectionFactory],
  exports: ['CONNECTION']
})
export class TenantModule { }