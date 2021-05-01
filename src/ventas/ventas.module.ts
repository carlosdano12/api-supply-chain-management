import { Module } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { VentasController } from './ventas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentaEncabezadoRepository } from './compra.repository';
import { VentaDetalleRepository } from './venta-detalle.repository';

@Module({
  imports: [TypeOrmModule.forFeature([VentaEncabezadoRepository]), TypeOrmModule.forFeature([VentaDetalleRepository])],
  providers: [VentasService],
  controllers: [VentasController],
})
export class VentasModule {}
