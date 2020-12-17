import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { InsertResult } from 'typeorm';
import { v4 as uuid } from 'uuid'
import { CreateRoleDto } from './dto/create-role.dto';
import { RoleDto } from './dto/role.dto';
import { RoleService } from './role.service';
import { Mapper } from '@nartc/automapper'
import { FilterGetRoleDto } from './dto/filter-get-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { AddPermissionsDto } from './dto/add-permissions.dto';
import { PermissionService } from '../permission/permission.service';

@Controller('role')
export class RoleController {
    constructor(
        private readonly service: RoleService,
        private readonly permissionService: PermissionService
    ) {}
  
    @Get()
    async get(
        @Body() filterDto: FilterGetRoleDto
    ): Promise<RoleDto[]> {
        const result = await this.service.get(filterDto)
        return Mapper.mapArray(result,RoleDto);
    }

    @Get('/getWithRelations')
    async getWithRelations(
        @Body() filterDto: FilterGetRoleDto
    ): Promise<RoleDto[]> {
        const result = await this.service.getWithRelations(filterDto)
        return Mapper.mapArray(result,RoleDto);
    }
  
    @Post()
    async create(
        @Body() userData: CreateRoleDto
    ): Promise<InsertResult> {

        const id = uuid();
        const data = {id , ...userData};
        return await this.service.store(data) 
    }

    @Put('/:id')
    async update(
        @Param('id') id: string,
        @Body() userData: UpdateRoleDto
    ): Promise<RoleDto> {
        const result = await this.service.update(id, userData)
        return Mapper.map(result,RoleDto);
    }
  
    @Delete('/:id')
    async destroy(
        @Param('id') id: string
    ): Promise<DeleteResultInterface> {
        return this.service.delete(id)
    }

    @Patch('/addPermission')
    async addPermission(
        @Body() userData: AddPermissionsDto
    ): Promise<RoleDto> {
        const { idRole, idPermissions} = userData;
        const role = await this.service.findById(idRole);
        
        const currentPermissions = await this.permissionService.getByRole(idRole)
        
        const newPermissions = await this.permissionService.findByIds(idPermissions);

        role.permissions = [...currentPermissions,...newPermissions]
        await role.save()
        const result =  await this.service.getWithRelations({id:idRole});
        return Mapper.map(result[0], RoleDto);
    }
}
