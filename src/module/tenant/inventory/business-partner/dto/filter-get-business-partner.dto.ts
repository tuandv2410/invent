import { IsOptional } from 'class-validator';
import { BpCategory } from 'src/module/tenant/business/enum/bp-category.enum';
import { BpFunction } from 'src/module/tenant/business/enum/bp-function.enum';
import { BpStatus } from 'src/module/tenant/business/enum/bp-status.enum';

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