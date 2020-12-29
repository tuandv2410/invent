import { Global, HttpException, HttpStatus, Module, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { createConnection, getConnection, getConnectionManager } from 'typeorm';
import * as dotenv from 'dotenv';
import { OrganizationEntity } from 'src/entities/public/authentication/organization.entity';
dotenv.config();

const connectionFactory = {
  provide: 'CONNECTION',
  scope: Scope.REQUEST,
  useFactory: async (req) => {
    const schema = req.headers['schema'];
    const res = await getConnection().getRepository(OrganizationEntity).findOne({where:{name:schema}})
    if(!res) {
      throw new HttpException(`Schema does not exist`, HttpStatus.BAD_REQUEST);
    }
    if (schema) {
      const connectionName = `${schema}`;
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