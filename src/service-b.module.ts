import { Module } from '@nestjs/common';
import { AppService } from './service-b.controller';
import { ServiceBService } from './service-b.service';

@Module({
  controllers: [AppService],
  providers: [ServiceBService],
})
export class ServiceBModule {}