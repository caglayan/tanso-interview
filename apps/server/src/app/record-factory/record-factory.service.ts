import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Record, RecordDocument } from './schemas/record.schema';
import { Queue, Job } from 'bull';
import { InjectQueue } from '@nestjs/bull';
import { RecordDto } from './record-factory.controller';
import { AuditPoint } from '../audit-factory/audit-point.interface';

@Injectable()
export class RecordFactoryService {
  private readonly logger = new Logger('RecordFactoryService');

  constructor(
    @InjectModel(Record.name) private recordModel: Model<RecordDocument>,
    @InjectQueue('audit-queue') private auditQueue: Queue<AuditPoint>,
  ) {}

  public async find(id: string): Promise<Record> {
    return this.recordModel.findById(id);
  }

  public async create(recordDto: RecordDto): Promise<Record> {
    const createdRecord = await this.recordModel.create(recordDto as Record),
      auditPoint: AuditPoint = {
        ...recordDto,
        changeMethod: 'CREATE',
        changedDateTime: new Date().toISOString(),
      };

    await this.addToQueue(auditPoint);

    return createdRecord;
  }

  public async update(recordDto: RecordDto, id: string): Promise<Record> {
    const record = await this.recordModel.findById(id),
      keys = Object.keys(recordDto),
      auditPoint: AuditPoint = { changeMethod: 'UPDATE', changedDateTime: new Date().toISOString(), updatedBy: recordDto.updatedBy };

    if (!record) {
      throw new NotFoundException();
    }

    let changed = false;
    for (const key in record) {
      if (key !== '_id' && keys.includes(key) && recordDto[key] !== record[key]) {
        auditPoint[key] = recordDto[key];
        changed = true;
      }
    }

    if (changed) {
      await this.addToQueue(auditPoint);
      return this.recordModel.findByIdAndUpdate(id, recordDto as Record, { new: true });
    } else {
      this.logger.warn('Nothing is updated');
    }

    return record;
  }

  private async addToQueue(auditPoint: AuditPoint): Promise<Job<AuditPoint>> {
    return this.auditQueue.add(auditPoint, {
      attempts: 5,
      backoff: {
        type: 'customStrategy',
      },
      removeOnComplete: true,
    });
  }
}
