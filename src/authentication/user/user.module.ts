import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from '../../entities/authentication/user.entity';
import { UserController } from './user.controller';
import { PermissionModule } from 'src/authentication/permission/permission.module';
import { RoleModule } from 'src/authentication/role/role.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    PermissionModule,
    RoleModule,
  ],
  providers: [
    UserService
  ],
  exports: [
    UserService
  ],
  controllers: [UserController]
})
export class UserModule {}
