import { IsNotEmpty, IsIn } from 'class-validator';

export class CreateOrderDto {

    @IsNotEmpty()
    createDate: string;
}
