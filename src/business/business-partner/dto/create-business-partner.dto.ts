import { IsNotEmpty, IsIn } from 'class-validator';
import { BpCategory } from 'src/business/enum/bp-category.enum';
import { BpFunction } from 'src/business/enum/bp-function.enum';

export class CreateBPDto {

    @IsNotEmpty()
    fullName: string;
  

    @IsNotEmpty()
    @IsIn([BpCategory.GROUP, BpCategory.ORGANIZATION, BpCategory.PERSON])
    category: BpCategory;
  
 
    @IsNotEmpty()
    @IsIn([BpFunction.CUSTOMER, BpFunction.SUPPLIER])
    functions: BpFunction;

}
