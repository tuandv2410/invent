import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { BusinessPartnerEntity } from 'src/entities/business/business-partner.entity';
import { Repository } from 'typeorm';
import { BpStatus } from '../enum/bp-status.enum';
import { CreateBPDto } from './dto/create-business-partner.dto';
import { GetBpsFilterDto } from './dto/filter-search-bp.dto';
import { UpdateBPDto } from './dto/update-business-partner.dto';

@Injectable()
export class BusinessPartnerService {
    constructor(
        @InjectRepository(BusinessPartnerEntity)
        private BpRepository: Repository<BusinessPartnerEntity>,
    ) {}

    async getById(id: number ): Promise<BusinessPartnerEntity> {
        const found = await this.BpRepository.findOne({id});
        if(!found){
            throw new HttpException(`Business Partner with ID "${id}" not found!`, HttpStatus.NOT_FOUND);
        }
        return found;
    }

    async getBP(filterDto:GetBpsFilterDto): Promise<BusinessPartnerEntity[]> {
        const {id, category, functions } = filterDto;
        const query = this.BpRepository.createQueryBuilder('business-partner');

        if(id) {
            query.andWhere('business-partner.id = :id', { id });
        }

        if(category) {
            query.andWhere('business-partner.category = :category', { category });
        }

        if(functions) {
            query.andWhere('business-partner.function = :functions', { functions });
        }
    
        try {
            const bps = await query.getMany();
            return bps;
        } catch (error) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getAll(): Promise<BusinessPartnerEntity[]> {
        try{
            //return this.roleRepository.find();
            const res = await this.BpRepository
            .createQueryBuilder("business-partner")
            .getMany()
            return res;
        }catch(error) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    async create(createBPDto: CreateBPDto): Promise<BusinessPartnerEntity> {
        const { fullName, category, functions } = createBPDto;
        const Bp = new BusinessPartnerEntity()

        Bp.function = functions;
        Bp.category = category;
        Bp.fullName = fullName;
        Bp.status = BpStatus.ACTIVE;
        try{
            await Bp.save();
        } catch (error) {
            if (error.code === '23505') {
                throw new HttpException("Business Partner's name already exists", HttpStatus.CONFLICT);
            } else {
                throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return Bp;
    }

    async update(updateBPDto: UpdateBPDto): Promise<BusinessPartnerEntity> {
        const { id, fullName, category, functions, status } = updateBPDto;

        const Bp = await this.getById(id);
        Bp.fullName = fullName;
        Bp.category = category;
        Bp.function = functions;
        Bp.status = status;

        try {
            await Bp.save();
        } catch(error) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return Bp;
    }

    async delete(id: number): Promise<DeleteResultInterface> {

        const result = await this.BpRepository.delete({id});

        if(result.affected === 0){
            throw new HttpException(`Business Partner with ID "${id}" not found!`, HttpStatus.NOT_FOUND);
        }

        return {
            succes: true,
            message: "deleted",
        }
    }
}
