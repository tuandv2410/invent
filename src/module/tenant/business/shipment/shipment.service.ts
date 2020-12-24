import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { ShipmentEntity } from 'src/entities/tenant/business/shipment.entity';
import { ShipmentRepository } from './shipment.repository';

@Injectable()
export class ShipmentService extends BaseService<ShipmentEntity, ShipmentRepository>{
    constructor(
        repository: ShipmentRepository,
        @Inject('CONNECTION') private connection
    ) {
        super(repository)
        this.repository = this.connection.getRepository(ShipmentEntity);
    }
}