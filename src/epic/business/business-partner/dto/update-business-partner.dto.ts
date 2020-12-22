import { IsOptional } from 'class-validator';
import { AutoMap } from 'nestjsx-automapper';
import { BpCategory } from 'src/epic/business/enum/bp-category.enum';
import { BpFunction } from 'src/epic/business/enum/bp-function.enum';
import { BpStatus } from 'src/epic/business/enum/bp-status.enum';

export class UpdateBusinessPartnerDto {

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