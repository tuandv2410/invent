import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddingServiceController } from './adding-service.controller';
import { AddingServiceRepository } from './adding-service.repository';
import { AddingServiceService } from './adding-service.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([AddingServiceRepository]),
  ],
  controllers: [AddingServiceController],
  providers: [AddingServiceService]
})
export class AddingServiceModule {}
