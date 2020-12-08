import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessPartnerController } from './business-partner.controller';
import { BusinessPartnerService } from './business-partner.service';
import { BusinessPartnerRepository } from './business-partner.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([BusinessPartnerRepository]),
  ],
  controllers: [BusinessPartnerController],
  providers: [BusinessPartnerService]
})
export class BusinessPartnerModule {}
