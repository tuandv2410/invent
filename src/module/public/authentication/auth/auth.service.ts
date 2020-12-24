import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../../../../interfaces/jwt-payload.interface';
import { LoginStatus } from '../../../../interfaces/login-status.inteface';
import { Mapper } from '@nartc/automapper'
import { UserService } from '../user/user.service';
import { LoginUserDto } from './dto/login.user.dto';
import { UserDto } from '../user/dto/user.dto';
import { ResultInterface } from 'src/interfaces/result.interface';
import { ChangePasswordDto } from './dto/change-password.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
      ) {}
    
    async login(loginUserDto: LoginUserDto): Promise<LoginStatus> {
        const user = await this.userService.login(loginUserDto);
        
        const token = this._createToken(Mapper.map(user,UserDto));
    
        return {
            username: user.username,
            ...token,
        };
    }

    async changePassword(changePasswordDto: ChangePasswordDto): Promise<ResultInterface> {
        return await this.userService.changePassword(changePasswordDto);
    }
    
    async validateUser(payload: JwtPayload): Promise<UserDto> {
        const { username } = payload;
        const userInDb = await this.userService.get({username:username});
        if (!userInDb[0]) {
            throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
        }
        
        return Mapper.map(userInDb[0],UserDto);
    }
    
    private _createToken(userDto: UserDto): any {
        
        const expiresIn = process.env.EXPIRESIN;
    
        const username= userDto.username;
        const permissionsDto = userDto.permissions;
        let permissions= [];
        if(permissionsDto){
            permissionsDto.forEach(permissionDto=>{
                permissions= [...permissions, permissionDto.name];
            })
        }
        const organization= userDto.organization;

        const payload: JwtPayload = { username, permissions, organization};
        const accessToken = this.jwtService.sign(payload);
        return {
            expiresIn,
            organization,
            accessToken,
        };
    }
}
