import { IsNotEmpty, IsOptional } from 'class-validator';
import { HuStatus } from '../../../../../enum/hu-status.enum';
import { HuType } from '../../../../../enum/hu-type.enum';

export class CreateHandlingUnitDto{
    @IsNotEmpty()
    type: HuType;

    @IsOptional()
    parentId: string;
  
    @IsNotEmpty()
    dimension: number;
  
    @IsNotEmpty()
    weight: number;
  
    @IsNotEmpty()
    volume: number;
  
    @IsNotEmpty()
    totalPrice: number;
  
    @IsNotEmpty()
    currency: string;
  
    @IsNotEmpty()
    quantity: number;
  
    @IsNotEmpty()
    status: HuStatus;

    @IsOptional()
    product: string;

    @IsOptional()
    packageSpecification: string;

    @IsOptional()
    packgingMaterial: string;

}
