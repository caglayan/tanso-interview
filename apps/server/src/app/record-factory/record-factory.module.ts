import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecordFactoryController } from './record-factory.controller';
import { RecordFactoryService } from './record-factory.service';
import { Record, RecordSchema } from './schemas/record.schema';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Record.name, schema: RecordSchema }]),
    BullModule.registerQueue({
      name: 'audit-queue',
    }),
  ],
  controllers: [RecordFactoryController],
  providers: [RecordFactoryService],
})
export class RecordFactoryModule {}
