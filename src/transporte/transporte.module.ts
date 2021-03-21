import { Module } from '@nestjs/common';
import { TransporteService } from './transporte.service';
import { TransporteController } from './transporte.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrasporteRepository } from './transporte.repository';
import { TrasporteDetalleRepository } from './transporte-detalle.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TrasporteRepository]), TypeOrmModule.forFeature([TrasporteDetalleRepository])],
  providers: [TransporteService],
  controllers: [TransporteController],
})
export class TransporteModule {}
