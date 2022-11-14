import { Test, TestingModule } from '@nestjs/testing';
import { RecordFactoryService } from './record-factory.service';

describe('RecordFactoryService', () => {
  let service: RecordFactoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecordFactoryService],
    }).compile();

    service = module.get<RecordFactoryService>(RecordFactoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
