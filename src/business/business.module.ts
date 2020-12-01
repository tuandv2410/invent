import { Module } from '@nestjs/common';
import { BusinessPartnerModule } from './business-partner/business-partner.module';

@Module({
  imports: [BusinessPartnerModule]
})
export class BusinessModule {}
