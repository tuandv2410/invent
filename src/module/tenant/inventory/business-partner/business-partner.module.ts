import { Module } from '@nestjs/common';
import { BusinessPartnerController } from './business-partner.controller';
import { BusinessPartnerService } from './business-partner.service';
import { BusinessPartnerRepository } from './business-partner.repository';

@Module({
  controllers: [BusinessPartnerController],
  providers: [BusinessPartnerService,BusinessPartnerRepository],
  exports: [BusinessPartnerService]
})
export class BusinessPartnerModule {}
