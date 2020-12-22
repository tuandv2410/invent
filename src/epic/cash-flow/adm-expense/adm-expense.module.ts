import { Module } from '@nestjs/common';
import { AdmExpenseController } from './adm-expense.controller';
import { AdmExpenseService } from './adm-expense.service';

@Module({
  controllers: [AdmExpenseController],
  providers: [AdmExpenseService]
})
export class AdmExpenseModule {}
