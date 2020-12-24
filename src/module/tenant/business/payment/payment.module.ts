import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentController } from './payment.controller';
import { PaymentRepository } from './payment.repository';
import { PaymentService } from './payment.service';

@Module({
  controllers: [PaymentController],
  providers: [PaymentService,PaymentRepository],
  exports: [PaymentService]
})
export class PaymentModule {}
