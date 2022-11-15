import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuditFactoryService } from './audit-factory.service';
import { AuditPoint, AuditPointSchema } from './schemas/audit-point.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: AuditPoint.name, schema: AuditPointSchema }])],
  providers: [AuditFactoryService],
  exports: [AuditFactoryService],
})
export class AuditFactoryModule {}
