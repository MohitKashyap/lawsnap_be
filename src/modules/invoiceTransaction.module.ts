import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InvoiceTransactionController } from '@app/controllers/invoiceTransaction.controller';
import { InvoiceTransactionService } from '@app/services';
import {
  InvoiceTransaction,
  InvoiceTransactionSchema,
} from '@app/schemas/invoiceTransaction.schema';
import { InvoiceTransactionRepository } from '@app/repositories';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: InvoiceTransaction.name, schema: InvoiceTransactionSchema },
    ]),
  ],
  controllers: [InvoiceTransactionController],
  providers: [
    InvoiceTransactionService,
    {
      provide: 'invoiceTransactionModule',
      useClass: InvoiceTransactionRepository,
    },
  ],
})
export class InvoiceTransactionModule {}
