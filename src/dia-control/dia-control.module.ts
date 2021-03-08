import { Module } from '@nestjs/common';
import { DiaControlService } from './dia-control.service';
import { DiaControlController } from './dia-control.controller';

@Module({
  providers: [DiaControlService],
  controllers: [DiaControlController],
})
export class DiaControlModule {}
