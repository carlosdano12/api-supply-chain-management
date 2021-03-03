import { Module } from '@nestjs/common';
import { InsumosService } from './insumos.service';

@Module({
  providers: [InsumosService],
})
export class InsumosModule {}
