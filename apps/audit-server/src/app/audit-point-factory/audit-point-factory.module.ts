import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuditPointFactoryController } from './audit-point-factory.controller';
import { AuditPointFactoryService } from './audit-point-factory.service';
import { AuditPoint, AuditPointSchema } from './schemas/audit-point.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: AuditPoint.name, schema: AuditPointSchema }])],
  controllers: [AuditPointFactoryController],
  providers: [AuditPointFactoryService],
})
export class AuditPointFactoryModule {}
