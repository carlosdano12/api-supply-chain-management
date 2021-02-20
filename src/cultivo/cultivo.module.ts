import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CultivoController } from './cultivo.controller';
import { CultivoSiembraRepository } from './cultivo.repository';
import { CultivoService } from './cultivo.service';
import { CultivoCosechaRepository } from './cultivo_cosecha.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CultivoSiembraRepository]), TypeOrmModule.forFeature([CultivoCosechaRepository])],
  controllers: [CultivoController],
  providers: [CultivoService],
})
export class CultivoModule {}
