import { IsOptional } from 'class-validator';

export class FilterGetRoleDto {
    @IsOptional()
    id: string;

    @IsOptional()
    name: string;

    @IsOptional()
    description: string;
}
