import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PermissionEntity } from 'src/entities/authentication/permission.entity';
import { Repository } from 'typeorm';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { DeleteResultInterface } from './interfaces/delete-result.interface';

@Injectable()
export class PermissionService {
    constructor(
        @InjectRepository(PermissionEntity)
        private permissionRepository: Repository<PermissionEntity>,
    ) {}

    async getById(id: number ): Promise<PermissionEntity> {
        const found = await this.permissionRepository.findOne({id});
        if(!found){
            throw new HttpException(`Permission with ID "${id}" not found!`, HttpStatus.NOT_FOUND);
        }
        return found;
    }

    async getAll(): Promise<PermissionEntity[]> {
        try{
            return this.permissionRepository.find();
        }catch(error) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getMany(ids: number[]): Promise<PermissionEntity[]> {
        try {
            const permissions: PermissionEntity[] = await this.permissionRepository
                .createQueryBuilder("permission")
                .where("permission.id IN (:...permissionsId)",{permissionsId: ids})
                .getMany();
            
            return permissions;
        } catch(error) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getByUserId(userId: number): Promise<PermissionEntity[]> {
        try {
            const permissions: PermissionEntity[] = await this.permissionRepository
                .createQueryBuilder("permission")
                .leftJoin("permission.users","user")
                .where("user.id = :userId",{userId: userId})
                .getMany();
            
            return permissions;
        } catch(error) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getByRoleId(roleId: number): Promise<PermissionEntity[]> {
        try {
            const permissions: PermissionEntity[] = await this.permissionRepository
                .createQueryBuilder("permission")
                .leftJoin("permission.roles","role")
                .where("role.id = :roleId",{roleId: roleId})
                .getMany();
            
            return permissions;
        } catch(error) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async create(createPermissionDto: CreatePermissionDto): Promise<PermissionEntity> {
        const { name, description } = createPermissionDto;
        const permission = new PermissionEntity()

        permission.name = name;
        permission.description = description;

        try{
            await permission.save();
        } catch (error) {
            if (error.code === '23505') {
                throw new HttpException('Permission already exists', HttpStatus.CONFLICT);
            } else {
                throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return permission;
    }

    async update(updatePermissionDto: UpdatePermissionDto): Promise<PermissionEntity> {
        const { id, name, description } = updatePermissionDto;

        const permission = await this.getById(id);
        permission.name = name;
        permission.description = description;

        try {
            await permission.save();
        } catch(error) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return permission
    }

    async delete(id: number): Promise<DeleteResultInterface> {

        const result = await this.permissionRepository.delete({id});

        if(result.affected === 0){
            throw new HttpException(`Permission with ID "${id}" not found!`, HttpStatus.NOT_FOUND);
        }


        return {
            succes: true,
            message: "deleted",
        }
    }

}
