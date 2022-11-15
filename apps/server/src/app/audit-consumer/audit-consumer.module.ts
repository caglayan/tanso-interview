import { Module } from '@nestjs/common';
import { AuditFactoryModule } from '../audit-factory/audit-factory.module';
import { AuditConsumerService } from './audit-consumer.service';

@Module({
  imports: [AuditFactoryModule],
  providers: [AuditConsumerService],
})
export class AuditConsumerModule {}
