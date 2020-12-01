import { IsString, MinLength, MaxLength, IsNotEmpty } from 'class-validator';

export class CreatePermissionDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;
}