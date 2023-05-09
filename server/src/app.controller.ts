import { Controller, Get } from '@nestjs/common';
import { AppService, IGetHello } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): IGetHello {
    return this.appService.getHello();
  }
}
