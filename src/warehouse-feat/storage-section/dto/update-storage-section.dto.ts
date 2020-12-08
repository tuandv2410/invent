import { AutoMap } from 'nestjsx-automapper';

export class UpdateStorageSectionDto {

    @AutoMap()
    description: string;
}
