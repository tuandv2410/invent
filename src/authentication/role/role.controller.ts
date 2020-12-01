import { Body, Controller, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AddPermissionsDto } from './dto/add-permissions.dto';
import { CreateRoleDto } from './dto/create-role.dto';
import { RoleDto } from './dto/role.dto';
import { RoleService } from './role.service';
import { Mapper } from '@nartc/automapper'
import { Permissions } from '../auth/permissions.decorator';
import { PermissionsGuard } from '../auth/permissions.guard';

@Controller('role')
export class RoleController {
    constructor(
        private readonly roleService: RoleService
    ) {}

    @Post('create')
    public async create(
        @Body() createRoleDto: CreateRoleDto,
    ): Promise<RoleDto> {

        const result = await this.roleService.create(createRoleDto);

        return Mapper.map(result,RoleDto);
    }

    @Get('getAll')
    public async getAll(): Promise<RoleDto[]> {
        const result = await this.roleService.getAll();
        return Mapper.mapArray(result,RoleDto);
    }

        
    @Patch('addPermissions')
    @UseGuards(AuthGuard('jwt'),PermissionsGuard)
    @Permissions('read:hello')
    async addPermissions(
        @Body() addPermissionsDto: AddPermissionsDto
    ): Promise<RoleDto>{
        const role = await this.roleService.addPermissions(addPermissionsDto);
        return Mapper.map(role,RoleDto);
    }
}
