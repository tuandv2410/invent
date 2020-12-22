import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { InsertResult } from 'typeorm';
import { ShipmentService } from './shipment.service';
import { FilterGetShipmentDto } from './dto/filter-get-shipment.dto';
import { ShipmentDto } from './dto/shipment.dto';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { UpdateShipmentDto } from './dto/update-shipment.dto';
export declare class ShipmentController {
    private readonly service;
    constructor(service: ShipmentService);
    get(filterDto: FilterGetShipmentDto): Promise<ShipmentDto[]>;
    getWithRelations(filterDto: FilterGetShipmentDto): Promise<ShipmentDto[]>;
    create(userData: CreateShipmentDto): Promise<InsertResult>;
    update(id: string, userData: UpdateShipmentDto): Promise<ShipmentDto>;
    destroy(id: string): Promise<DeleteResultInterface>;
}
