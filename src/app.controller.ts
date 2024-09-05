import { Controller, Get } from '@nestjs/common';
import { AppService, Product } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/products')
  getProducts(): Product[] {
    return this.appService.getProducts();
  }
}
