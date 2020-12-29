import { Body, Controller, Get, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoginUserDto } from './dto/login.user.dto';
import { AuthService } from './auth.service';
import { JwtPayload } from '../../../../interfaces/jwt-payload.interface';
import { LoginStatus } from '../../../../interfaces/login-status.inteface';
import { ResultInterface } from 'src/interfaces/result.interface';
import { ChangePasswordDto } from './dto/change-password.dto';
import { Permissions } from './permissions.decorator';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) {}

    @Post('login')
    public async login(
        @Body() loginUserDto: LoginUserDto,
    ): Promise<LoginStatus> {
        return await this.authService.login(loginUserDto);
    }

    @Put('changePassword')
    public async changePassword(@Body() changePasswordDto: ChangePasswordDto): Promise<ResultInterface> {
        return await this.authService.changePassword(changePasswordDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Permissions('basic:test')
    @Get('whoami')
    public async testAuth(@Req() req: any): Promise<JwtPayload> {
        return req.user;
    }
}
