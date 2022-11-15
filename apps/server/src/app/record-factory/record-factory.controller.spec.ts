import { Test, TestingModule } from '@nestjs/testing';
import { RecordFactoryController } from './record-factory.controller';
import { RecordFactoryService } from './record-factory.service';

describe('RecordFactoryController', () => {
  let controller: RecordFactoryController;

  const mockRecordFactoryService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecordFactoryController],
      providers: [{ provide: RecordFactoryService, useValue: mockRecordFactoryService }],
    }).compile();

    controller = module.get<RecordFactoryController>(RecordFactoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
