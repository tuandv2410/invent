"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("typeorm");
const dotenv = require("dotenv");
const organization_entity_1 = require("../../entities/public/authentication/organization.entity");
dotenv.config();
const connectionFactory = {
    provide: 'CONNECTION',
    scope: common_1.Scope.REQUEST,
    useFactory: async (req) => {
        const schema = req.headers['schema'];
        const res = await typeorm_1.getConnection().getRepository(organization_entity_1.OrganizationEntity).findOne({ where: { name: schema } });
        if (!res) {
            throw new common_1.HttpException(`Schema does not exist`, common_1.HttpStatus.BAD_REQUEST);
        }
        if (schema) {
            const connectionName = `${schema}`;
            const connectionManager = typeorm_1.getConnectionManager();
            if (connectionManager.has(connectionName)) {
                const connection = connectionManager.get(connectionName);
                return Promise.resolve(connection.isConnected ? connection : connection.connect());
            }
            return typeorm_1.createConnection({
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
    inject: [core_1.REQUEST]
};
let TenantModule = class TenantModule {
};
TenantModule = __decorate([
    common_1.Global(),
    common_1.Module({
        providers: [connectionFactory],
        exports: ['CONNECTION']
    })
], TenantModule);
exports.TenantModule = TenantModule;
//# sourceMappingURL=tenant.module.js.map