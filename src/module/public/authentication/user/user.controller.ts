import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import * as bcrypt from 'bcrypt';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { Mapper } from '@nartc/automapper'
import { FilterGetUserDto } from './dto/filter-get-user.dto';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PermissionService } from '../permission/permission.service';
import { RoleService } from '../role/role.service';
import { AddPermissionsDto } from './dto/add-permissions.dto';
import { AddRoleDto } from './dto/add-role.dto';
import { UserEntity } from 'src/entities/public/authentication/user.entity';
import { plainToClass } from 'class-transformer';
import { PermissionsGuard } from '../auth/permissions.guard';

@Controller('user')

export class UserController {
    constructor(
        private readonly service: UserService,
        private readonly permissionService: PermissionService,
        private readonly roleService: RoleService,
    ) {}
  
    @Get()
    async get(
        @Body() filterDto: FilterGetUserDto
    ): Promise<UserDto[]> {
        const result = await this.service.get(filterDto)
        return Mapper.mapArray(result,UserDto);
    }

    @Get('/getWithRelations')
    async getWithRelations(
        @Body() filterDto: FilterGetUserDto
    ): Promise<UserDto[]> {
        const result = await this.service.getWithRelations(filterDto)
        return Mapper.mapArray(result,UserDto);
    }
  
    @Post()
    async create(
        @Body() userData: CreateUserDto
    ): Promise<UserDto> {

        const id = uuid();
        const salt = await bcrypt.genSalt();
        userData.password = await this.service.hashPassword(userData.password, salt);
        const data = {id ,salt, ...userData};
        const storeData = await this.service.store(data);
        const result = plainToClass(UserEntity,storeData);
        return Mapper.map(result,UserDto);
    }

    @Put('/:id')
    async update(
        @Param('id') id: string,
        @Body() userData: UpdateUserDto
    ): Promise<UserDto> {
        const result = await this.service.update(id, userData)
        return Mapper.map(result,UserDto);
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
    ): Promise<UserDto> {
        const { idUser, idPermissions} = userData;
        const user = await this.service.findById(idUser);
        const currentPermissions = await this.permissionService.getByUser(idUser);
        const newPermissions = await this.permissionService.findByIds(idPermissions);
        user.permissions = [...currentPermissions, ...newPermissions];
        await user.save();
        const result =  await this.service.getWithRelations({id:idUser});
        return Mapper.map(result[0], UserDto);
    }

    @Patch('/addRole')
    async addRole(
        @Body() userData: AddRoleDto
    ): Promise<UserDto> {
        const { idUser, idRole} = userData;
        const user = await this.service.findById(idUser);
        const currentRoles = await this.roleService.getByUser(idUser);
        const newRole = await this.roleService.findById(idRole);
        user.roles = [...currentRoles, newRole];
        await user.save();
        const result =  await this.service.getWithRelations({id:idUser});
        return Mapper.map(result[0], UserDto);
    }

}
