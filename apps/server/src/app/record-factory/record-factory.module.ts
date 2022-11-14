import { Module } from '@nestjs/common';
import { RecordFactoryController } from './record-factory.controller';

@Module({
  controllers: [RecordFactoryController],
})
export class RecordFactoryModule {}
