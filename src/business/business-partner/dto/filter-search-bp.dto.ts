import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';
import { BpFunction } from 'src/business/enum/bp-function.enum';
import { BpCategory } from 'src/business/enum/bp-category.enum';

export class GetBpsFilterDto {

    @IsOptional()
    id: number;

    @IsOptional()
    @IsIn([BpCategory.GROUP, BpCategory.ORGANIZATION, BpCategory.PERSON])
    category: BpCategory;

    @IsOptional()
    @IsIn([BpFunction.CUSTOMER, BpFunction.SUPPLIER])
    functions: BpFunction;
}
