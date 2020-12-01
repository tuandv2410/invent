import { CreateUserDto } from '../user/dto/create.user.dto';
import { LoginUserDto } from '../user/dto/login.user.dto';
import { AuthService } from './auth.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { LoginStatus } from './interfaces/login-status.inteface';
import { RegistrationStatus } from './interfaces/regisration-status.interface';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(createUserDto: CreateUserDto): Promise<RegistrationStatus>;
    login(loginUserDto: LoginUserDto): Promise<LoginStatus>;
    testAuth(req: any): Promise<JwtPayload>;
}
