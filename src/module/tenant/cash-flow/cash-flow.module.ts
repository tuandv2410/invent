import { Module } from '@nestjs/common';
import { SellingExpenseModule } from './selling-expense/selling-expense.module';
import { AdmExpenseModule } from './adm-expense/adm-expense.module';
import { DaExpenseModule } from './da-expense/da-expense.module';
import { OtherExpenseModule } from './other-expense/other-expense.module';
import { TaxExpenseModule } from './tax-expense/tax-expense.module';
import { PayrollModule } from './payroll/payroll.module';
import { OtherIncomeModule } from './other-income/other-income.module';
import { CapitalModule } from './capital/capital.module';

@Module({
  imports: [SellingExpenseModule, AdmExpenseModule, DaExpenseModule, OtherExpenseModule, TaxExpenseModule, PayrollModule, OtherIncomeModule, CapitalModule]
})
export class CashFlowModule {}
