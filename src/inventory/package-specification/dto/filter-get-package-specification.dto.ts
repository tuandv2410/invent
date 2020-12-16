import { IsOptional } from 'class-validator';

export class FilterGetPackageSpecificationDto {
    @IsOptional()
    id: string;
  
    @IsOptional()
    name: string;
  
    @IsOptional()
    packingLevel: number;
  
    @IsOptional()
    quantity: number;

    @IsOptional()
    product: string;

    @IsOptional()
    packgingMaterial: string;
}
