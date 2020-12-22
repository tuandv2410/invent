import { IsOptional } from 'class-validator';

export class UpdateStorageSectionDto {
    @IsOptional()
    name: string;
}
