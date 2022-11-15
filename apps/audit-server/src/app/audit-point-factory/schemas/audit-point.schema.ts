import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsOptional, IsString } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type AuditPointDocument = HydratedDocument<AuditPoint>;

@Schema({ timestamps: true, versionKey: false })
export class AuditPoint {
  @IsString()
  @Prop({ required: true })
  updatedBy: string;

  @IsString()
  @Prop({ required: true })
  changedDateTime: string;

  @IsString()
  @Prop({ required: true })
  changeMethod: 'CREATE' | 'UPDATE';

  @IsOptional()
  @Prop({ required: false })
  emissionGasName?: string;

  @IsOptional()
  @Prop({ required: false })
  quantity?: number;

  @IsOptional()
  @Prop({ required: false })
  unit?: string;
}

export const AuditPointSchema = SchemaFactory.createForClass(AuditPoint);
