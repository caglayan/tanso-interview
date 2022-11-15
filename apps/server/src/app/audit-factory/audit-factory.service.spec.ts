import { Test, TestingModule } from '@nestjs/testing';
import { AuditFactoryService } from './audit-factory.service';

describe('AuditFactoryService', () => {
  let service: AuditFactoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuditFactoryService],
    }).compile();

    service = module.get<AuditFactoryService>(AuditFactoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
