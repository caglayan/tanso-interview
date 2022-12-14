import { BadRequestException, Body, Controller, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { IsString } from 'class-validator';
import { RecordFactoryService } from './record-factory.service';
import { Record } from './schemas/record.schema';

export class RecordDto extends Record {
  @IsString()
  updatedBy: string;
}

@Controller('record')
export class RecordFactoryController {
  constructor(private readonly recordFactoryService: RecordFactoryService) {}

  @Post()
  public async createRecord(@Body() recordDto: RecordDto): Promise<Record> {
    return this.recordFactoryService.create(recordDto);
  }

  @Put(':id')
  public async updateRecord(@Param('id') id: string, @Body() recordDto: RecordDto): Promise<Record> {
    if (!id || !recordDto._id || id !== recordDto._id) {
      throw new BadRequestException();
    }

    return this.recordFactoryService.update(recordDto, id);
  }

  @Get(':id')
  public async getRecord(@Param('id') id: string): Promise<Record> {
    const record = await this.recordFactoryService.find(id);

    if (!record) {
      throw new NotFoundException();
    }

    return this.recordFactoryService.find(id);
  }
}
