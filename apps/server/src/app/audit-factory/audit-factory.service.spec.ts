import { Test, TestingModule } from '@nestjs/testing';
import { AuditFactoryService } from './audit-factory.service';
import { HttpService } from '@nestjs/axios';
import { AuditPoint } from './audit-point.interface';
import { Observable, of } from 'rxjs';

describe('AuditFactoryService', () => {
  let service: AuditFactoryService;

  const mockHttpService = {
      post: jest.fn((): Observable<AuditPoint> => of()),
    },
    mockAuditPoint: AuditPoint = {
      changedDateTime: '',
      changeMethod: 'CREATE',
      updatedBy: '',
    };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuditFactoryService, { provide: HttpService, useValue: mockHttpService }],
    }).compile();

    service = module.get<AuditFactoryService>(AuditFactoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should post to the audit server', () => {
    service.create(mockAuditPoint);

    expect(mockHttpService.post).toBeCalled();
  });
});
