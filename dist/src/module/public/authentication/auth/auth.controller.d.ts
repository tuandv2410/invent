import { LoginUserDto } from './dto/login.user.dto';
import { AuthService } from './auth.service';
import { JwtPayload } from '../../../../interfaces/jwt-payload.interface';
import { LoginStatus } from '../../../../interfaces/login-status.inteface';
import { ResultInterface } from 'src/interfaces/result.interface';
import { ChangePasswordDto } from './dto/change-password.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginUserDto: LoginUserDto): Promise<LoginStatus>;
    changePassword(changePasswordDto: ChangePasswordDto): Promise<ResultInterface>;
    testAuth(req: any): Promise<JwtPayload>;
}
