import { Module } from '@nestjs/common';
import { DaExpenseController } from './da-expense.controller';
import { DaExpenseService } from './da-expense.service';

@Module({
  controllers: [DaExpenseController],
  providers: [DaExpenseService]
})
export class DaExpenseModule {}
