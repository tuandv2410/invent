import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { PermissionModule } from './permission/permission.module';
import { OrganizationModule } from './organization/organization.module';

@Module({
  imports: [AuthModule, UserModule, RoleModule, PermissionModule, OrganizationModule]
})
export class AuthenticationModule {}
