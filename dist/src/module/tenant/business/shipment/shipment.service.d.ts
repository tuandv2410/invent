import { BaseService } from 'src/base/base.service';
import { ShipmentEntity } from 'src/entities/tenant/business/shipment.entity';
import { ShipmentRepository } from './shipment.repository';
export declare class ShipmentService extends BaseService<ShipmentEntity, ShipmentRepository> {
    private connection;
    constructor(repository: ShipmentRepository, connection: any);
}
