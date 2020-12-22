import { IsOptional } from 'class-validator';
import { HuStatus } from '../../enum/hu-status.enum';
import { HuType } from '../../enum/hu-type.enum';

export class FilterGetHandlingUnitDto {
    @IsOptional()
    id: string;
  
    @IsOptional()
    type: HuType;

    @IsOptional()
    parentId: string;
  
    @IsOptional()
    dimension: number;
  
    @IsOptional()
    weight: number;
  
    @IsOptional()
    volume: number;
  
    @IsOptional()
    totalPrice: number;
  
    @IsOptional()
    currency: string;
  
    @IsOptional()
    quantity: number;
  
    @IsOptional()
    status: HuStatus;

    @IsOptional()
    product: string;

    @IsOptional()
    packageSpecification: string;

    @IsOptional()
    packgingMaterial: string;
}
