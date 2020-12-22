import { IsOptional } from 'class-validator';

export class UpdatePackageSpecificationDto {
    @IsOptional()
    name: string;
  
    @IsOptional()
    packingLevel: number;
  
    @IsOptional()
    quantity: number;
}
