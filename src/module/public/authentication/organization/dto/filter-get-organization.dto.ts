import { IsOptional } from 'class-validator';

export class FilterGetOrganizationDto {
    @IsOptional()
    id: string;

    @IsOptional()
    name: string;

}
