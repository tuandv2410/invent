import { AutoMap } from 'nestjsx-automapper';

export class FilterGetStorageSectionDto {
    @AutoMap()
    id: string;
  
    @AutoMap()
    description: string;
}
