import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { PaymentEntity } from 'src/entities/tenant/business/payment.entity';
import { PaymentRepository } from './payment.repository';

@Injectable()
export class PaymentService extends BaseService<PaymentEntity, PaymentRepository>{
    constructor(
        repository: PaymentRepository,
        @Inject('CONNECTION') private connection
    ) {
            super(repository)
            this.repository = this.connection.getRepository(PaymentEntity);
    }
}