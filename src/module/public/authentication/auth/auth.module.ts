import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConfig } from 'src/config/jwt.config';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule.register({ defaultStrategy: 'jwt'}),
    JwtModule.register(jwtConfig)
  ],
  controllers: [
    AuthController
  ],
  providers: [
    AuthService,
    JwtStrategy,
  ],
  exports: [
    JwtStrategy,
    PassportModule,
  ],
})
export class AuthModule {}
