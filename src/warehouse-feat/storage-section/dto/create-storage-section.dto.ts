import { AutoMap } from 'nestjsx-automapper';

export class CreateStorageSectionDto{

    @AutoMap()
    description: string;
}
