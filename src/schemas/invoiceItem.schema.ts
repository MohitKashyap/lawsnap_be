import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from './base.schema';
import { HydratedDocument, Types } from 'mongoose';

export type InvoiceItemSchemaDocument = HydratedDocument<InvoiceItem>;

@Schema()
export class InvoiceItem extends BaseSchema {
  @Prop({ required: true, type: String, maxlength: 50 })
  name: string;

  @Prop({ type: String })
  description?: string;

  @Prop({ required: true, type: Number })
  amount: number;

  @Prop({ type: Number })
  discount?: number;

  @Prop({ type: Number })
  tax?: number;

  @Prop({ required: true, type: Number })
  finalAmount: number;

  @Prop({ type: Types.ObjectId, ref: 'Invoice', required: true })
  invoiceId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'ServicePlan', required: true })
  servicePlanId?: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Subscription', required: true })
  subscriptionId?: Types.ObjectId;
}

export const InvoiceItemSchema = SchemaFactory.createForClass(InvoiceItem);
