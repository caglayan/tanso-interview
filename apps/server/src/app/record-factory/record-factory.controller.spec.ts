import { Test, TestingModule } from '@nestjs/testing';
import { RecordFactoryController } from './record-factory.controller';

describe('RecordFactoryController', () => {
  let controller: RecordFactoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecordFactoryController],
    }).compile();

    controller = module.get<RecordFactoryController>(RecordFactoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
