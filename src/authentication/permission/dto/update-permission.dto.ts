import { IsString, IsOptional } from 'class-validator';

export class UpdatePermissionDto {

    @IsOptional()
    name: string;

    @IsOptional()
    @IsString()
    description: string;
}