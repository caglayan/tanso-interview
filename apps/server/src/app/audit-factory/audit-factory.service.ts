import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { AuditPoint } from './audit-point.interface';

@Injectable()
export class AuditFactoryService {
  constructor(private readonly httpService: HttpService) {}

  public create(auditPoint: AuditPoint): Observable<AuditPoint> {
    return this.httpService.post<AuditPoint>('http://localhost:3334/api/audit', auditPoint).pipe(map((resp) => resp.data));
  }
}
