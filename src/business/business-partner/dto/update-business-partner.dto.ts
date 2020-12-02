import { IsString, MinLength, MaxLength, IsNotEmpty, IsNumber, IsIn } from 'class-validator';
import { BpCategory } from 'src/business/enum/bp-category.enum';
import { BpFunction } from 'src/business/enum/bp-function.enum';
import { BpStatus } from 'src/business/enum/bp-status.enum';

export class UpdateBPDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;
    
    @IsNotEmpty()
    @IsString()
    fullName: string;

    @IsNotEmpty()
    @IsIn([BpCategory.GROUP, BpCategory.ORGANIZATION, BpCategory.PERSON])
    category: BpCategory;
  
    @IsNotEmpty()
    @IsIn([BpFunction.CUSTOMER, BpFunction.SUPPLIER])
    functions: BpFunction;
  
    @IsNotEmpty()
    @IsIn([BpStatus.ACTIVE, BpStatus.DEACTIVE])
    status: BpStatus;
}