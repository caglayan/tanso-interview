import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecordFactoryModule } from './record-factory/record-factory.module';
import { BullModule } from '@nestjs/bull';
import { AuditConsumerModule } from './audit-consumer/audit-consumer.module';
import { AuditFactoryModule } from './audit-factory/audit-factory.module';

@Module({
  imports: [
    RecordFactoryModule,
    MongooseModule.forRoot('mongodb://localhost:27017'),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    AuditConsumerModule,
    AuditFactoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
