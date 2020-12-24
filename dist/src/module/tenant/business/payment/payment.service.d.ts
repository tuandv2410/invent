import { BaseService } from 'src/base/base.service';
import { PaymentEntity } from 'src/entities/tenant/business/payment.entity';
import { PaymentRepository } from './payment.repository';
export declare class PaymentService extends BaseService<PaymentEntity, PaymentRepository> {
    private connection;
    constructor(repository: PaymentRepository, connection: any);
}
