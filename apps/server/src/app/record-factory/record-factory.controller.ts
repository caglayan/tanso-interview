import { Controller, Get, Post, Put } from '@nestjs/common';
import { RecordFactoryService } from './record-factory.service';

@Controller('record')
export class RecordFactoryController {

    constructor(private readonly recordFactoryService:RecordFactoryService) {}

    @Post()
    public createRecord():void{
        console.log('Created')
    }

    @Put()
    public updateRecord():void{
        console.log('Updated')
    }

    @Get()
    public getRecord():string{
        console.log('Get record')
        
        return 'Hello Server'
    }

}
