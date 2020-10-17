import { Controller, Get, Req, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller(':name')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Param() param): string {
    return this.appService.getHello(param.name);
  }
}
