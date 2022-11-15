import { Job } from 'bull';
import { Processor, Process } from '@nestjs/bull';
import { AuditFactoryService } from '../audit-factory/audit-factory.service';

@Processor('audit-queue')
export class AuditConsumerService {
  constructor(private readonly auditFactoryService: AuditFactoryService) {}

  @Process()
  async createAuditPoint(job: Job) {
    this.auditFactoryService.create(job.data);
  }
}
