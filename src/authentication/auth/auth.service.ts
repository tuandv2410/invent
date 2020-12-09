import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { LoginStatus } from './interfaces/login-status.inteface';
import { RegistrationStatus } from './interfaces/regisration-status.interface';
import { Mapper } from '@nartc/automapper'
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create.user.dto';
import { AddPermissionsDto } from '../user/dto/add-permissions.dto';
import { LoginUserDto } from '../user/dto/login.user.dto';
import { UserDto } from '../user/dto/user.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
      ) {}
    
    async register(createUserDto: CreateUserDto): Promise<RegistrationStatus> {
        let status: RegistrationStatus = {
            success: true,
            message: 'user registered',
        };

        try {
            const user = await this.userService.create(createUserDto);
            const a: AddPermissionsDto = {
                permissionsId: [1],
                userId: user.id,
            };
            await this.userService.addPermissions(a);
        } catch (err) {
            status = {
                success: false,
                message: err,
            };
        }

        return status;
    }
    
    async login(loginUserDto: LoginUserDto): Promise<LoginStatus> {
        const user = await this.userService.findByLogin(loginUserDto);
        
        const token = this._createToken(Mapper.map(user,UserDto));
    
        return {
            username: user.username,
            ...token,
        };
    }
    
    async validateUser(payload: JwtPayload): Promise<UserDto> {
        const { username, permissions } = payload;
        const userInDb = await this.userService.findByUsername(username);
        if (!userInDb) {
            throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
        }
        
        return Mapper.map(userInDb,UserDto);

    }
    
    private _createToken(userDto: UserDto): any {
        
        const expiresIn = process.env.EXPIRESIN;
    
        const username= userDto.username;
        const permissionsDto = userDto.permissionsDto;
        let permissions= [];
        if(permissionsDto){
            permissionsDto.forEach(permissionDto=>{
                permissions= [...permissions, permissionDto.name];
            })
        }

        const payload: JwtPayload = { username, permissions };
        const accessToken = this.jwtService.sign(payload);
        return {
            expiresIn,
            accessToken,
        };
    }
}
