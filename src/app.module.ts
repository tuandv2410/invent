import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutomapperModule } from 'nestjsx-automapper';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { typeOrmConfig } from './config/typeorm.config';
import { BusinessModule } from './business/business.module';
import { WarehouseFeatModule } from './warehouse-feat/warehouse-feat.module';
import { InventoryModule } from './inventory/inventory.module';
import { SellingAndSourcingModule } from './selling-and-sourcing/selling-and-sourcing.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
@Module({
  imports: [
    AutomapperModule.withMapper(),
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthenticationModule,
    BusinessModule,
    WarehouseFeatModule,
    InventoryModule,
    SellingAndSourcingModule
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