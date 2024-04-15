// service-a.module.ts
import { Module } from '@nestjs/common';
import { ServiceAController } from './service-a.controller';
import { ServiceAService } from './service-a.service';

@Module({
  controllers: [ServiceAController],
  providers: [ServiceAService],
})
export class ServiceAModule {}