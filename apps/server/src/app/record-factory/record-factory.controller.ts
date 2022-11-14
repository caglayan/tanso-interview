import { Controller, Post, Put } from '@nestjs/common';

@Controller('record')
export class RecordFactoryController {

    @Post()
    public createRecord():void{
        console.log('Created')
    }

    @Put()
    public updateRecord():void{
        console.log('Updated')
    }

}
