import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, @Inject('SERVICE_A') private readonly clientA: ClientProxy, @Inject('SERVICE_B') private readonly clientB: ClientProxy) {}

  @Get()
  async getHello(): Promise<string> {
    const resultA = await this.clientA.send('getHello', '').toPromise();
    const resultB = await this.clientB.send('getHello', '').toPromise();
    return this.appService.getHello(resultA, resultB);
  }
}