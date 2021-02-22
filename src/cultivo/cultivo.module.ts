import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CultivoController } from './cultivo.controller';
import { CultivoSiembraRepository } from './cultivo.repository';
import { CultivoService } from './cultivo.service';
import { CultivoCosechaController } from './cultivo_cosecha.controller';
import { CultivoCosechaRepository } from './cultivo_cosecha.repository';
import { CultivoCosechaService } from './cultivo_cosecha.service';

@Module({
  imports: [TypeOrmModule.forFeature([CultivoSiembraRepository]), TypeOrmModule.forFeature([CultivoCosechaRepository])],
  controllers: [CultivoController, CultivoCosechaController],
  providers: [CultivoService, CultivoCosechaService],
})
export class CultivoModule {}
