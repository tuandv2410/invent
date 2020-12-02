import { BusinessPartnerService } from './business-partner.service';
import { CreateBPDto } from './dto/create-business-partner.dto';
import { BusinessPartnerDto } from './dto/business-partner.dto';
import { GetBpsFilterDto } from './dto/filter-search-bp.dto';
import { UpdateBPDto } from './dto/update-business-partner.dto';
export declare class BusinessPartnerController {
    private readonly bpService;
    constructor(bpService: BusinessPartnerService);
    create(createBpDto: CreateBPDto): Promise<BusinessPartnerDto>;
    getBps(filterDto: GetBpsFilterDto): Promise<BusinessPartnerDto[]>;
    updateBp(updateDto: UpdateBPDto): Promise<BusinessPartnerDto>;
}
