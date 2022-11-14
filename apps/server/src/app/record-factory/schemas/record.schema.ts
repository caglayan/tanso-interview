import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNumber, IsString } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type RecordDocument = HydratedDocument<Record>;

@Schema()
export class Record {
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
