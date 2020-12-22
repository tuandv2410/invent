import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutomapperModule } from 'nestjsx-automapper';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './epic/authentication/authentication.module';
import { typeOrmConfig } from './config/typeorm.config';
import { BusinessModule } from './epic/business/business.module';
import { WarehouseFeatModule } from './epic/warehouse-feat/warehouse-feat.module';
import { InventoryModule } from './epic/inventory/inventory.module';
import { SellingAndSourcingModule } from './epic/selling-and-sourcing/selling-and-sourcing.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { CashFlowModule } from './epic/cash-flow/cash-flow.module';
import { SearchModule } from './search/search.module';
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
    SearchModule
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