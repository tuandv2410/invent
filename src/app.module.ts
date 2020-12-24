import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutomapperModule } from 'nestjsx-automapper';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './module/public/authentication/authentication.module';
import { typeOrmConfig } from './config/typeorm.config';
import { BusinessModule } from './module/tenant/business/business.module';
import { WarehouseFeatModule } from './module/tenant/warehouse-feat/warehouse-feat.module';
import { InventoryModule } from './module/tenant/inventory/inventory.module';
import { SellingAndSourcingModule } from './module/tenant/selling-and-sourcing/selling-and-sourcing.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { CashFlowModule } from './module/tenant/cash-flow/cash-flow.module';
import { SearchModule } from './search/search.module';
import { TenantModule } from './module/tenant/tenant.module';
@Module({
  imports: [
    AutomapperModule.withMapper(),
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthenticationModule,
    BusinessModule,
    WarehouseFeatModule,
    InventoryModule,
    SellingAndSourcingModule,
    CashFlowModule,
    SearchModule,
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