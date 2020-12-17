import { Module } from '@nestjs/common';
import { BillInvoiceController } from './bill-invoice.controller';
import { BillInvoiceService } from './bill-invoice.service';

@Module({
  controllers: [BillInvoiceController],
  providers: [BillInvoiceService]
})
export class BillInvoiceModule {}
