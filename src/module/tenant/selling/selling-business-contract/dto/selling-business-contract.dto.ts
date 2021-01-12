import { Mapper } from '@nartc/automapper'
import { SellingBusinessContractEntity } from 'src/entities/tenant/selling/selling-business-contract.entity';
import { ProductSellingContractEntity } from 'src/entities/tenant/selling/product-selling-contract.entity';
import { Period } from 'src/enum/period.enum';
import { CommissionEntity } from 'src/entities/tenant/selling/commission.entity';
import { SellingOrderEntity } from 'src/entities/tenant/selling/selling-order.entity';

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

class SellingOrder {
  id :string;
  value: number;
  createDate: string;
  addingServiceType: string;
}
Mapper.createMap(SellingOrderEntity, SellingOrder)

export class SellingBusinessContractDto {

  id: string;

  createdDate: string;

  moneyValue: number;

  productSellingContracts: ProductSellingContract[];

  commission: Commission;

  sellingOrders: SellingOrder[];

}

Mapper.createMap(SellingBusinessContractEntity, SellingBusinessContractDto)