import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutomapperModule } from 'nestjsx-automapper';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './module/public/authentication/authentication.module';
import { typeOrmConfig } from './config/typeorm.config';
import { WarehouseFeatModule } from './module/tenant/warehouse-feat/warehouse-feat.module';
import { InventoryModule } from './module/tenant/inventory/inventory.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { CashFlowModule } from './module/tenant/cash-flow/cash-flow.module';
import { SearchModule } from './search/search.module';
import { TenantModule } from './module/tenant/tenant.module';
import { SellingModule } from './module/tenant/selling/selling.module';
import { SourcingModule } from './module/tenant/sourcing/sourcing.module';
@Module({
  imports: [
    AutomapperModule.withMapper(),
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthenticationModule,
    WarehouseFeatModule,
    InventoryModule,
    CashFlowModule,
    SearchModule,
    SellingModule,
    SourcingModule,
    TenantModule
  ],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('/');
  }
}