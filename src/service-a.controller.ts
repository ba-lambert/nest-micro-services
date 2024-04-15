import { Controller, Get } from '@nestjs/common';
import { ServiceAService } from './service-a.service';

@Controller()
export class ServiceAController {
  constructor(private readonly serviceAService: ServiceAService) {}

  @Get()
  getHello(): string {
    return this.serviceAService.getHello();
  }
}