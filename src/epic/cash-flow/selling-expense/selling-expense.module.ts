import { Module } from '@nestjs/common';
import { SellingExpenseController } from './selling-expense.controller';
import { SellingExpenseService } from './selling-expense.service';

@Module({
  controllers: [SellingExpenseController],
  providers: [SellingExpenseService]
})
export class SellingExpenseModule {}
