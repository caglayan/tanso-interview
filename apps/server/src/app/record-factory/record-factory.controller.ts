import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { Prop } from '@nestjs/mongoose';
import { IsString } from 'class-validator';
import { RecordFactoryService } from './record-factory.service';
import { Record } from './schemas/record.schema';

export class RecordDto extends Record {
  @IsString()
  @Prop({ required: true })
  updatedBy: string;
}

@Controller('record')
export class RecordFactoryController {
  constructor(private readonly recordFactoryService: RecordFactoryService) {}

  @Post()
  public async createRecord(@Body() recordDto: Record): Promise<void> {
    return this.recordFactoryService.create(recordDto);
  }

  @Put()
  public updateRecord(): void {
    console.log('Updated');
  }

  @Get()
  public getRecord(): string {
    console.log('Get record');

    return 'Hello Server';
  }
}
