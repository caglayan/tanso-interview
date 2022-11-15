import { Test, TestingModule } from '@nestjs/testing';
import { AuditFactoryService } from '../audit-factory/audit-factory.service';
import { AuditConsumerService } from './audit-consumer.service';

describe('AuditConsumerService', () => {
  let service: AuditConsumerService;

  const mockAuditFactoryService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuditConsumerService, { provide: AuditFactoryService, useValue: mockAuditFactoryService }],
    }).compile();

    service = module.get<AuditConsumerService>(AuditConsumerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
