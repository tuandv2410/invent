import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Permissions } from 'src/authentication/auth/permissions.decorator';
import { PermissionsGuard } from 'src/authentication/auth/permissions.guard';
import { AddPermissionsDto } from './dto/add-permissions.dto';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { Mapper } from '@nartc/automapper'
import { AddRoleDto } from './dto/add-role.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ChangePasswordResult } from './interfaces/change-password-result.interface';

@Controller('user')

export class UserController {
    constructor(
        private readonly userService: UserService,
    ) {}

    
    @Patch('addPermissions')
    @UseGuards(AuthGuard('jwt'),PermissionsGuard)
    @Permissions('read:hello')
    async addPermissions(
        @Body() addPermissionsDto: AddPermissionsDto
    ): Promise<UserDto>{
        const user = await this.userService.addPermissions(addPermissionsDto);

        return Mapper.map(user,UserDto);
    }

    @Get('getAll')
    public async getAll(): Promise<UserDto[]> {
        const result = await this.userService.getAll();
        return Mapper.mapArray(result,UserDto);
    }

    @Get('getById')
    public async getById(
        @Body() userId: number
    ): Promise<UserDto> {
        const result = await this.userService.getById(userId);
        return Mapper.map(result,UserDto);
    }

    @Patch('addRole')
    @UseGuards(AuthGuard('jwt'),PermissionsGuard)
    @Permissions('read:hello')
    async addRoles(
        @Body() addRolesDto: AddRoleDto
    ): Promise<UserDto>{
        const user = await this.userService.addRole(addRolesDto);

        return Mapper.map(user,UserDto);
    }


    @Patch('changePassword')
    async changePassword(
        @Body() changePasswordDto: ChangePasswordDto
    ): Promise<ChangePasswordResult> {
        return await this.userService.changePassword(changePasswordDto);
    }
}
