import { AutoMap } from 'nestjsx-automapper';
import { Mapper } from '@nartc/automapper'
import { PackageSpecificationEntity } from 'src/entities/inventory/package-specification.entity';

export class PackageSpecificationDto{
  @AutoMap()
  id: string;

  @AutoMap()
  name: string;

  @AutoMap()
  packingLevel: number;

  @AutoMap()
  quantity: number;

}

Mapper.createMap(PackageSpecificationEntity, PackageSpecificationDto);