import { Test, TestingModule } from '@nestjs/testing';
import { AuditConsumerService } from './audit-consumer.service';

describe('AuditConsumerService', () => {
  let service: AuditConsumerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuditConsumerService],
    }).compile();

    service = module.get<AuditConsumerService>(AuditConsumerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
