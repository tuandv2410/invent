import { DeleteResultInterface } from 'src/interfaces/delete-result.interface';
import { InsertResult } from 'typeorm';
import { ActivityAreaService } from './activity-area.service';
import { FilterGetActivityAreaDto } from './dto/filter-get-activity-area.dto';
import { ActivityAreaDto } from './dto/activity-area.dto';
import { CreateActivityAreaDto } from './dto/create-activity-area.dto';
import { UpdateActivityAreaDto } from './dto/update-activity-area.dto';
export declare class ActivityAreaController {
    private readonly service;
    constructor(service: ActivityAreaService);
    get(filterDto: FilterGetActivityAreaDto): Promise<ActivityAreaDto[]>;
    getWithRelations(filterDto: FilterGetActivityAreaDto): Promise<ActivityAreaDto[]>;
    create(userData: CreateActivityAreaDto): Promise<InsertResult>;
    update(id: string, userData: UpdateActivityAreaDto): Promise<ActivityAreaDto>;
    destroy(id: string): Promise<DeleteResultInterface>;
}
