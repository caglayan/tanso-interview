import { Job, DoneCallback } from 'bull';
import { Processor, Process } from '@nestjs/bull';
import { AuditFactoryService } from '../audit-factory/audit-factory.service';
import { Logger } from '@nestjs/common';
import { AuditPoint } from '../audit-factory/audit-point.interface';

@Processor('audit-queue')
export class AuditConsumerService {
  private readonly logger = new Logger('AuditConsumerService');

  constructor(private readonly auditFactoryService: AuditFactoryService) {}

  @Process()
  async createAuditPoint(job: Job, done: DoneCallback) {
    this.auditFactoryService.create(job.data).subscribe({
      next: (auditPoint: AuditPoint) => {
        this.logger.debug('AuditPoint created.', auditPoint);
        done();
      },
      error: (error) => {
        this.logger.error(`Attempts Made: ${job.attemptsMade} error: ${error}`);
        job.discard();
        done(error);
      },
    });
  }
}
