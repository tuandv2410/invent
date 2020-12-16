import { IsNotEmpty } from 'class-validator';

export class CreateStorageSectionDto{

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    storageType: string;
}
