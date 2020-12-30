import { Module } from '@nestjs/common';
import { AddingServiceController } from './adding-service.controller';
import { AddingServiceRepository } from './adding-service.repository';
import { AddingServiceService } from './adding-service.service';

@Module({
  controllers: [AddingServiceController],
  providers: [AddingServiceService,AddingServiceRepository],
  exports: [AddingServiceService]
})
export class AddingServiceModule {}
