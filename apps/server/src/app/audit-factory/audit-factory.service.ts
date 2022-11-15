import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuditPoint, AuditPointDocument } from './schemas/audit-point.schema';

@Injectable()
export class AuditFactoryService {
  constructor(@InjectModel(AuditPoint.name) private auditPointModel: Model<AuditPointDocument>) {}

  public async create(auditPoint: AuditPoint): Promise<AuditPoint> {
    console.log(auditPoint);
    return await this.auditPointModel.create(auditPoint);
  }
}
