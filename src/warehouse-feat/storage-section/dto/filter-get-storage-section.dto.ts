import { IsOptional } from 'class-validator';

export class FilterGetStorageSectionDto {
    @IsOptional()
    id: string;

    @IsOptional()
    name: string;
  
    @IsOptional()
    storageType: string;
}

