import { AutoMap } from 'nestjsx-automapper';
import { Mapper } from '@nartc/automapper'
import { PmCategory } from 'src/inventory/enum/pm-category.enum';
import { PmType } from 'src/inventory/enum/pm-type.enum';
import { PackgingMaterialEntity } from 'src/entities/inventory/packging-material.entity';

export class PackgingMaterialDto{
  @AutoMap()
  id: string;

  @AutoMap()
  type: PmType;

  @AutoMap()
  category: PmCategory;

  @AutoMap()
  tareWeight: number;

  @AutoMap()
  tareVolume: string;

  @AutoMap()
  capacities: string;

}

Mapper.createMap(PackgingMaterialEntity, PackgingMaterialDto);