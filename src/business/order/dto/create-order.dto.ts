import { IsNotEmpty, IsIn } from 'class-validator';
export class CreateOrderDto {

    @IsNotEmpty()
    create_date: string;
}
