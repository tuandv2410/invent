import { IsString, MinLength, MaxLength, IsNotEmpty, IsNumber } from 'class-validator';
import { AutoMap } from 'nestjsx-automapper';
import { Mapper } from '@nartc/automapper'
import { PermissionEntity } from 'src/entities/authentication/permission.entity';

export class PermissionDto {
    @AutoMap()
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @AutoMap()
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    name: string;

    @AutoMap()
    @IsNotEmpty()
    @IsString()
    description: string;
}

Mapper.createMap(PermissionEntity, PermissionDto);