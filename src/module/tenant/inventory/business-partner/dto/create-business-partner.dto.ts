import { IsNotEmpty, IsOptional } from 'class-validator';
import { AutoMap } from 'nestjsx-automapper';
import { BpCategory } from 'src/enum/bp-category.enum';
import { BpFunction } from 'src/enum/bp-function.enum';
import { BpStatus } from 'src/enum/bp-status.enum';

export class CreateBusinessPartnerDto {

    @IsNotEmpty()
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
  
    @IsNotEmpty()
    status: BpStatus;
}
