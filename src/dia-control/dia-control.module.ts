import { Module } from '@nestjs/common';
import { DiaControlService } from './dia-control.service';
import { DiaControlController } from './dia-control.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiaControlRepository } from './dia-control.repository';
import { DiaControlInsumosRepository } from './dia-control-insumo.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DiaControlRepository]), TypeOrmModule.forFeature([DiaControlInsumosRepository])],
  providers: [DiaControlService],
  controllers: [DiaControlController],
})
export class DiaControlModule {}
