import { IsNotEmpty, IsIn } from 'class-validator';

export class UpdateOrderDto {

    @IsNotEmpty()
    createDate: string;
}
