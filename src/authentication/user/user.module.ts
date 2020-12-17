import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserController } from './user.controller';
import { PermissionModule } from 'src/authentication/permission/permission.module';
import { RoleModule } from 'src/authentication/role/role.module';
import { UserRepository } from './user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
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
