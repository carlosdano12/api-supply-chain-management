import { Module } from '@nestjs/common';
import { CompraService } from './compra.service';
import { CompraController } from './compra.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompraDetalleRepository } from './compra-detalle.repository';
import { CompraEncabezadoRepository } from './compra.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([CompraEncabezadoRepository]),
    TypeOrmModule.forFeature([CompraDetalleRepository]),
  ],
  providers: [CompraService],
  controllers: [CompraController],
})
export class CompraModule {}
