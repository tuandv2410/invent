import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleEntity } from 'src/entities/authentication/role.entity';
import { Repository } from 'typeorm';
import { DeleteResultInterface } from '../permission/interfaces/delete-result.interface';
import { PermissionService } from '../permission/permission.service';
import { AddPermissionsDto } from './dto/add-permissions.dto';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(RoleEntity)
        private roleRepository: Repository<RoleEntity>,
        private permissionService: PermissionService,
    ) {}

    async getById(id: number ): Promise<RoleEntity> {
        const found = await this.roleRepository.findOne({id});
        if(!found){
            throw new HttpException(`Role with ID "${id}" not found!`, HttpStatus.NOT_FOUND);
        }
        return found;
    }

    async getAll(): Promise<RoleEntity[]> {
        try{
            //return this.roleRepository.find();
            const res = await this.roleRepository
            .createQueryBuilder("role")
            .leftJoinAndSelect("role.permissions","permission")
            .getMany()
            return res;
        }catch(error) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getByUserId(userId: number): Promise<RoleEntity[]> {
        try {
            const roles: RoleEntity[] = await this.roleRepository
                .createQueryBuilder("role")
                .leftJoin("role.users","user")
                .where("user.id = :userId",{userId: userId})
                .getMany();
            
            return roles;
        } catch(error) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async create(createRoleDto: CreateRoleDto): Promise<RoleEntity> {
        const { name, description } = createRoleDto;
        const role = new RoleEntity()

        role.name = name;
        role.description = description;

        try{
            await role.save();
        } catch (error) {
            if (error.code === '23505') {
                throw new HttpException('Role already exists', HttpStatus.CONFLICT);
            } else {
                throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return role;
    }

    async addPermissions(addPermissionsDto: AddPermissionsDto): Promise<RoleEntity> {
        const { roleId, permissionsId } = addPermissionsDto;
        const role = await this.roleRepository.findOne(roleId);
        const permission1 = await this.permissionService.getMany(permissionsId);
        const permission2 = await this.permissionService.getByRoleId(roleId);


        role.permissions = [...permission1,...permission2];
        console.log(permissionsId);
        
        await role.save();
        const res = await this.roleRepository
            .createQueryBuilder("role")
            .leftJoinAndSelect("role.permissions","permission")
            .where("role.id = :rid", { rid: roleId})
            .getOne()
        return res;
    }

    async update(updateRoleDto: UpdateRoleDto): Promise<RoleEntity> {
        const { id, name, description } = updateRoleDto;

        const role = await this.getById(id);
        role.name = name;
        role.description = description;

        try {
            await role.save();
        } catch(error) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return role;
    }

    async delete(id: number): Promise<DeleteResultInterface> {

        const result = await this.roleRepository.delete({id});

        if(result.affected === 0){
            throw new HttpException(`Role with ID "${id}" not found!`, HttpStatus.NOT_FOUND);
        }

        return {
            succes: true,
            message: "deleted",
        }
    }
}
