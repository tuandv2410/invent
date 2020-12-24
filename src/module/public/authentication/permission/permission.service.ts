import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PermissionEntity } from 'src/entities/public/authentication/permission.entity';
import { BaseService } from 'src/base/base.service';
import { PermissionRepository } from './permission.repository';

@Injectable()
export class PermissionService extends BaseService<PermissionEntity, PermissionRepository>{
    constructor(repository: PermissionRepository) {
        super(repository)
    }

    async getByRole(roleId: string):Promise<PermissionEntity[]> {
        try {
            const permissions: PermissionEntity[] = await this.repository
                .createQueryBuilder("permission")
                .leftJoin("permission.roles","role")
                .where("role.id = :roleId",{roleId: roleId})
                .getMany();
            
            return permissions;
        } catch(error) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getByUser(userId: string): Promise<PermissionEntity[]> {
        try {
            const permissions: PermissionEntity[] = await this.repository
                .createQueryBuilder("permission")
                .leftJoin("permission.users","user")
                .where("user.id = :userId",{userId: userId})
                .getMany();
            
            return permissions;
        } catch(error) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}