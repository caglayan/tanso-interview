import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type RecordDocument = HydratedDocument<Record>;

@Schema({ timestamps: true, versionKey: false })
export class Record {
  @IsOptional()
  _id?: string;

  @IsString()
  @Prop({ required: true })
  emissionGasName: string;

  @IsNumber()
  @Prop({ required: true })
  quantity: number;

  @IsString()
  @Prop({ required: true })
  unit: string;
}

export const RecordSchema = SchemaFactory.createForClass(Record);
