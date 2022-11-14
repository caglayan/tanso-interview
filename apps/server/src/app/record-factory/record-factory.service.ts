import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Record, RecordDocument } from './schemas/record.schema';

@Injectable()
export class RecordFactoryService {
  constructor(@InjectModel(Record.name) private recordModel: Model<RecordDocument>) {}

  public async find(id: string): Promise<Record> {
    return this.recordModel.findById(id);
  }

  public async create(record: Record): Promise<Record> {
    return this.recordModel.create(record);
  }

  public async update(record: Record, id: string): Promise<Record> {
    return this.recordModel.findByIdAndUpdate(id, record, { new: true });
  }
}
