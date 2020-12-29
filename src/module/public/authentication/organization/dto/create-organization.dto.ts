import { IsString, IsNotEmpty } from 'class-validator';

export class CreateOrganizationDto {
    @IsNotEmpty()
    @IsString()
    name: string;

}