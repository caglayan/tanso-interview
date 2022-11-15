import { BadRequestException, Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { AuditPointFactoryService } from './audit-point-factory.service';
import { AuditPoint } from './schemas/audit-point.schema';

@Controller('audit')
export class AuditPointFactoryController {
  constructor(private readonly auditPointFactoryService: AuditPointFactoryService) {}

  @Post()
  public async createAuditPoint(@Body() auditPointDto: AuditPoint): Promise<AuditPoint> {
    throw new BadRequestException();

    //return this.auditPointFactoryService.create(auditPointDto);
  }

  @Get(':id')
  public async getAuditPoint(@Param('id') id: string): Promise<AuditPoint> {
    const auditPoint = await this.auditPointFactoryService.find(id);

    if (!auditPoint) {
      throw new NotFoundException();
    }

    return auditPoint;
  }
}
