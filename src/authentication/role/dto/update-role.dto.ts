import { IsString, MinLength, MaxLength, IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateRoleDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;
    
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;
}