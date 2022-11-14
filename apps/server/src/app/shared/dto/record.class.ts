import { IsString } from 'class-validator';

export class Record {
  @IsString()
  emissionGasName: string;

  @IsString()
  quantity: number;

  @IsString()
  unit: string;

  @IsString()
  updatedBy: string;
}
