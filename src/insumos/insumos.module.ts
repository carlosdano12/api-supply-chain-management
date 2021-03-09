import { Module } from '@nestjs/common';
import { InsumosService } from './insumos.service';
import { InsumosController } from './insumos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InsumoRepository } from './insumo.repository';

@Module({
  imports: [TypeOrmModule.forFeature([InsumoRepository])],
  providers: [InsumosService],
  controllers: [InsumosController],
  exports: [InsumosService],
})
export class InsumosModule {}
