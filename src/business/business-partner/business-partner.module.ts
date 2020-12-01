import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessPartnerEntity } from 'src/entities/business/business-partner.entity';
import { BusinessPartnerController } from './business-partner.controller';
import { BusinessPartnerService } from './business-partner.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([BusinessPartnerEntity]),
  ],
  controllers: [BusinessPartnerController],
  providers: [BusinessPartnerService]
})
export class BusinessPartnerModule {}
