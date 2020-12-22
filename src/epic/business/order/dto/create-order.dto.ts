import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateOrderDto {

    @IsNotEmpty()
    createDate: string;

    @IsNotEmpty()
    businessContract: string;

    @IsOptional()
    addingService : string;
}



