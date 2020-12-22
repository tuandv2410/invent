import { IsOptional } from 'class-validator';
import { PmCategory } from 'src/epic/inventory/enum/pm-category.enum';
import { PmType } from 'src/epic/inventory/enum/pm-type.enum';

export class UpdatePackgingMaterialDto {
    @IsOptional()
    type: PmType;
  
    @IsOptional()
    category: PmCategory;
  
    @IsOptional()
    tareWeight: number;
  
    @IsOptional()
    tareVolume: number;
  
    @IsOptional()
    capacities: number;
}
