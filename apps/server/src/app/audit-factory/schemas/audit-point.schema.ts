import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AuditPointDocument = HydratedDocument<AuditPoint>;

@Schema({ timestamps: true, versionKey: false })
export class AuditPoint {
  @Prop({ required: true })
  updatedBy: string;

  @Prop({ required: true })
  changedDateTime: string;

  @Prop({ required: true })
  changeMethod: 'CREATE' | 'UPDATE';

  @Prop({ required: false })
  emissionGasName?: string;

  @Prop({ required: false })
  quantity?: number;

  @Prop({ required: false })
  unit?: string;
}

export const AuditPointSchema = SchemaFactory.createForClass(AuditPoint);
