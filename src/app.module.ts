import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutomapperModule } from 'nestjsx-automapper';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { typeOrmConfig } from './config/typeorm.config';
import { BusinessModule } from './business/business.module';

@Module({
  imports: [
    AutomapperModule.withMapper(),
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthenticationModule,
    BusinessModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
