import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { ShipmentEntity } from 'src/entities/business/shipment.entity';
import { ShipmentRepository } from './shipment.repository';

@Injectable()
export class ShipmentService extends BaseService<ShipmentEntity, ShipmentRepository>{
    constructor(repository: ShipmentRepository) {
        super(repository)
    }
}