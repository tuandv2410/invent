import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { PermissionEntity } from 'src/entities/authentication/permission.entity';
import { RoleEntity } from 'src/entities/authentication/role.entity';
import { RoleRepository } from './role.repository';

@Injectable()
export class RoleService extends BaseService<RoleEntity, RoleRepository>{
    constructor(repository: RoleRepository) {
        super(repository)
    }

    async getByUser(userId: string): Promise<RoleEntity[]> {
        try {
            const roles: RoleEntity[] = await this.repository
                .createQueryBuilder("role")
                .leftJoin("role.users","user")
                .where("user.id = :userId",{userId: userId})
                .getMany();
            
            return roles;
        } catch(error) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    async getByPermission(permissionId: string): Promise<RoleEntity[]> {
        try {
            const roles: RoleEntity[] = await this.repository
                .createQueryBuilder("role")
                .leftJoin("role.permissions","permission")
                .where("permission.id = :permissionId",{permissionId: permissionId})
                .getMany();
            
            return roles;
        } catch(error) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}