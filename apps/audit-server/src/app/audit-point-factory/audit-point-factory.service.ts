import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuditPoint, AuditPointDocument } from './schemas/audit-point.schema';

@Injectable()
export class AuditPointFactoryService {
  constructor(@InjectModel(AuditPoint.name) private auditPointModel: Model<AuditPointDocument>) {}

  public async find(id: string): Promise<AuditPoint> {
    return this.auditPointModel.findById(id);
  }

  public async create(auditPoint: AuditPoint): Promise<AuditPoint> {
    return this.auditPointModel.create(auditPoint);
  }
}
