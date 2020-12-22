import { IsOptional } from 'class-validator';
import { BpCategory } from 'src/epic/business/enum/bp-category.enum';
import { BpFunction } from 'src/epic/business/enum/bp-function.enum';
import { BpStatus } from 'src/epic/business/enum/bp-status.enum';

export class FilterGetBusinessPartnerDto {
    @IsOptional()
    id: string;
  
    @IsOptional()
    fullName: string;
  
    @IsOptional()
    address: string;
  
    @IsOptional()
    taxInfo: string;
  
    @IsOptional()
    phone: string;
  
    @IsOptional()
    email: string;
  
    @IsOptional()
    discount: number;
  
    @IsOptional()
    category: BpCategory;
  
    @IsOptional()
    function: BpFunction;
  
    @IsOptional()
    status: BpStatus;
  }