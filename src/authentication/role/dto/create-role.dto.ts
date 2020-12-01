import { IsString, MinLength, MaxLength, IsNotEmpty } from 'class-validator';

export class CreateRoleDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;
}