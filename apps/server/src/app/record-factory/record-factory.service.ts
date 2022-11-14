import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Record, RecordDocument } from './schemas/record.schema';

@Injectable()
export class RecordFactoryService {
    constructor(@InjectModel(Record.name) private catModel: Model<RecordDocument>) {}
}