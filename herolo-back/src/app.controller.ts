import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log("hjasjjsjs");
    return this.appService.getHello();
  }

  @Get('shachar')
  shachar(): string {
    console.log("hjasjjsjs");
    return this.appService.getHello();
  }
}
