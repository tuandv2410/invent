import { IsOptional } from 'class-validator';

export class FilterGetPermissionDto {
    @IsOptional()
    id: string;

    @IsOptional()
    name: string;

    @IsOptional()
    description: string;

    @IsOptional()
    roles: string;
}
