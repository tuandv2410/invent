import { AutoMap } from 'nestjsx-automapper';
import { Mapper } from '@nartc/automapper'
import { SellingBusinessContractEntity } from 'src/entities/tenant/selling/selling-business-contract.entity';
import { ProductSellingContractEntity } from 'src/entities/tenant/selling/product-selling-contract.entity';
import { Period } from 'src/enum/period.enum';
import { CommissionEntity } from 'src/entities/tenant/selling/commission.entity';
import { ServiceType } from 'src/enum/service-type.enum';
import { AddingServiceEntity } from 'src/entities/tenant/selling/adding-service.entity';

class ProductSellingContract {
  id: string;
  quantity: number;
  totalPrice: number;
  discount: number;
  currency: string;
}
Mapper.createMap(ProductSellingContractEntity, ProductSellingContract)

class Commission {
  id: string;
  value: number;
  currency: string;
  startDate: string;
  endDate: string;
  period: Period;
}
Mapper.createMap(CommissionEntity, Commission)

class AddingService {
  id: string;
  price: number;
  description: string;
  type: ServiceType;
}
Mapper.createMap(AddingServiceEntity, AddingService)

class SellingOrder {
  id :string;
  createDate: string;
}

export class SellingBusinessContractDto {

  @AutoMap()
  id: string;

  @AutoMap()
  createdDate: string;

  @AutoMap()
  moneyValue: number;

  @AutoMap()
  productSellingContracts: ProductSellingContract[];

  @AutoMap(()=>Commission)
  commission: Commission;

  @AutoMap(()=>AddingService)
  addingServices: AddingService[];

}

Mapper.createMap(SellingBusinessContractEntity, SellingBusinessContractDto)