import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { PermissionDto } from './dto/permission.dto';
import { PermissionService } from './permission.service';
import { Mapper } from '@nartc/automapper'

@Controller('permission')
export class PermissionController {
    constructor(
        private readonly permissionService: PermissionService,
    ) {}

    @Post('create')
    public async create(
        @Body() createPermissionDto: CreatePermissionDto,
    ): Promise<PermissionDto> {

        const result = await this.permissionService.create(createPermissionDto);
        return Mapper.map(result,PermissionDto);
    }

    @Get('getAll')
    public async getAll(): Promise<PermissionDto[]> {
        const result = await this.permissionService.getAll();
        return Mapper.mapArray(result,PermissionDto);
    }


}
