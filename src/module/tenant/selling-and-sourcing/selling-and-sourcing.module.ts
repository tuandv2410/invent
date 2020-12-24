import { Module } from '@nestjs/common';
import { BillInvoiceModule } from './bill-invoice/bill-invoice.module';
import { AccountReceivableModule } from './account-receivable/account-receivable.module';
import { AccountPayableModule } from './account-payable/account-payable.module';
import { InventoryModule } from './inventory/inventory.module';

@Module({
  imports: [BillInvoiceModule, AccountReceivableModule, AccountPayableModule, InventoryModule]
})
export class SellingAndSourcingModule {}
