import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../../../../interfaces/jwt-payload.interface';
import { LoginStatus } from '../../../../interfaces/login-status.inteface';
import { UserService } from '../user/user.service';
import { LoginUserDto } from './dto/login.user.dto';
import { UserDto } from '../user/dto/user.dto';
import { ResultInterface } from 'src/interfaces/result.interface';
import { ChangePasswordDto } from './dto/change-password.dto';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    login(loginUserDto: LoginUserDto): Promise<LoginStatus>;
    changePassword(changePasswordDto: ChangePasswordDto): Promise<ResultInterface>;
    validateUser(payload: JwtPayload): Promise<UserDto>;
    private _createToken;
}
