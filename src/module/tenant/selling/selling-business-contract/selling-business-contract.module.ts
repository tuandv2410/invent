import { Module } from '@nestjs/common';
import { SellingBusinessContractController } from './selling-business-contract.controller';
import { SellingBusinessContractService } from './selling-business-contract.service';

@Module({
    controllers: [SellingBusinessContractController],
    providers: [SellingBusinessContractService]
})
export class SellingBusinessContractModule {}
