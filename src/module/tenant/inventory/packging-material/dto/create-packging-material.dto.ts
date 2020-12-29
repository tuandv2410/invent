import { IsNotEmpty, IsOptional } from 'class-validator';
import { PmCategory } from 'src/module/tenant/inventory/enum/pm-category.enum';
import { PmType } from 'src/module/tenant/inventory/enum/pm-type.enum';

export class CreatePackgingMaterialDto{

    @IsNotEmpty()
    type: PmType;
  
    @IsNotEmpty()
    category: PmCategory;

    @IsOptional()
    tareWeight: number;

    @IsOptional()
    tareVolume: number;

    @IsOptional()
    capacities: number;
}