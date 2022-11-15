import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AuditFactoryService } from './audit-factory.service';

@Module({
  imports: [HttpModule],
  providers: [AuditFactoryService],
  exports: [AuditFactoryService],
})
export class AuditFactoryModule {}
