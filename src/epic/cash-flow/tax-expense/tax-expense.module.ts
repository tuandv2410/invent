import { Module } from '@nestjs/common';
import { TaxExpenseController } from './tax-expense.controller';
import { TaxExpenseService } from './tax-expense.service';

@Module({
  controllers: [TaxExpenseController],
  providers: [TaxExpenseService]
})
export class TaxExpenseModule {}
