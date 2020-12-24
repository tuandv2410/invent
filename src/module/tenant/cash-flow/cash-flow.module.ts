import { Module } from '@nestjs/common';
import { SellingExpenseModule } from './selling-expense/selling-expense.module';
import { AdmExpenseModule } from './adm-expense/adm-expense.module';
import { DaExpenseModule } from './da-expense/da-expense.module';
import { OtherExpenseModule } from './other-expense/other-expense.module';
import { TaxExpenseModule } from './tax-expense/tax-expense.module';
import { PayrollModule } from './payroll/payroll.module';
import { CogsModule } from './cogs/cogs.module';
import { CommissionModule } from './commission/commission.module';
import { ProfitModule } from './profit/profit.module';
import { RevenueModule } from './revenue/revenue.module';
import { OtherIncomeModule } from './other-income/other-income.module';

@Module({
  imports: [SellingExpenseModule, AdmExpenseModule, DaExpenseModule, OtherExpenseModule, TaxExpenseModule, PayrollModule, CogsModule, CommissionModule, ProfitModule, RevenueModule, OtherIncomeModule]
})
export class CashFlowModule {}
