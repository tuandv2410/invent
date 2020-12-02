import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { BusinessPartnerEntity } from 'src/entities/business/business-partner.entity';
import { Repository } from 'typeorm';
import { CreateBPDto } from './dto/create-business-partner.dto';
import { GetBpsFilterDto } from './dto/filter-search-bp.dto';
import { UpdateBPDto } from './dto/update-business-partner.dto';
export declare class BusinessPartnerService {
    private BpRepository;
    constructor(BpRepository: Repository<BusinessPartnerEntity>);
    getById(id: number): Promise<BusinessPartnerEntity>;
    getBP(filterDto: GetBpsFilterDto): Promise<BusinessPartnerEntity[]>;
    getAll(): Promise<BusinessPartnerEntity[]>;
    create(createBPDto: CreateBPDto): Promise<BusinessPartnerEntity>;
    update(updateBPDto: UpdateBPDto): Promise<BusinessPartnerEntity>;
    delete(id: number): Promise<DeleteResultInterface>;
}
