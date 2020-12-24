import { AutoMap } from 'nestjsx-automapper';
import { mapFrom, Mapper } from '@nartc/automapper'
import { BinType } from 'src/module/tenant/warehouse-feat/enum/bin-type.enum';
import { StorageBinEntity } from 'src/entities/tenant/warehouse-feat/storage-bin.entity';
import { IsNotEmpty } from 'class-validator';

class Sku {
  id: string;

  productName: string;

  expireDate: string;

  unitPrice: number;

  currency: string;

  quantity: number;
}
export class StorageBinDto{
  @AutoMap()
  @IsNotEmpty()
  id: string;

  @AutoMap()
  @IsNotEmpty()
  name: string;

  @AutoMap()
  @IsNotEmpty()
  maxWeight: number;

  @AutoMap()
  @IsNotEmpty()
  totalCapicity: number;

  @AutoMap()
  @IsNotEmpty()
  type: BinType;

  @AutoMap()
  skus: Sku[]
}

Mapper.createMap(StorageBinEntity, StorageBinDto)
.forMember(
  d=>d.skus,
  mapFrom(s=>s.skus)
)