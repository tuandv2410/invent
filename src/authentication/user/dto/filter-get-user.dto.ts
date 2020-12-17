import { IsOptional } from 'class-validator';

export class FilterGetUserDto {

    @IsOptional()
    id: string;
    
    @IsOptional()
    username: string;

    @IsOptional()
    password: string;

    @IsOptional()
    email: string;

    @IsOptional()
    organization: string;
}
