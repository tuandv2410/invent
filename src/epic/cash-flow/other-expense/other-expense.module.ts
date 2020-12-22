import { Module } from '@nestjs/common';
import { OtherExpenseController } from './other-expense.controller';
import { OtherExpenseService } from './other-expense.service';

@Module({
  controllers: [OtherExpenseController],
  providers: [OtherExpenseService]
})
export class OtherExpenseModule {}
