import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { BusinessPartnerService } from './business-partner.service';
import { CreateBPDto } from './dto/create-business-partner.dto';
import { Mapper } from '@nartc/automapper'
import { BusinessPartnerDto } from './dto/business-partner.dto';
import { GetBpsFilterDto } from './dto/filter-search-bp.dto';
import { UpdateBPDto } from './dto/update-business-partner.dto';

@Controller('business-partner')
export class BusinessPartnerController {
    constructor(
        private readonly bpService: BusinessPartnerService,
    ) {}

    @Post('create')
    public async create(
        @Body() createBpDto: CreateBPDto,
    ): Promise<BusinessPartnerDto> {

        const result = await this.bpService.create(createBpDto);
        return Mapper.map(result,BusinessPartnerDto);
    }

    @Get()
    public async getBps(
        @Body() filterDto: GetBpsFilterDto
    ): Promise<BusinessPartnerDto[]> {
        const result = await this.bpService.getBP(filterDto);
        return Mapper.mapArray(result,BusinessPartnerDto);
    }

    @Patch('updateBp')
    public async updateBp(
        @Body() updateDto: UpdateBPDto
    ): Promise<BusinessPartnerDto> {
        const result = await this.bpService.update(updateDto);
        return Mapper.map(result,BusinessPartnerDto);
    }

}
