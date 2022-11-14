import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecordFactoryModule } from './record-factory/record-factory.module';

@Module({
  imports: [RecordFactoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
