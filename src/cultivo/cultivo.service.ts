import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CultivoSiembraRepository } from './cultivo.repository';
import { CultivoDto } from './dto/cultivo.dto';

@Injectable()
export class CultivoService {
  constructor(
    @InjectRepository(CultivoSiembraRepository)
    private readonly _cultivoSiembraRepository: CultivoSiembraRepository,
  ) {}

  async createOne(dto: CultivoDto) {
    const cultivo = this._cultivoSiembraRepository.create(dto);
    return await this._cultivoSiembraRepository.save(cultivo);
  }

  async getOne(asociadId: string, cultivoId: string) {
    return await this._cultivoSiembraRepository.findOne({
      where: { id_cultivo: cultivoId, asociadoIdAsociado: asociadId },
    });
  }

  async getManyByAsociado(asociadoId: string) {
    return await this._cultivoSiembraRepository.find({ where: { asociadoIdAsociado: asociadoId } });
  }

  async editOne(asociadId: string, cultivoId: string, dto: CultivoDto) {
    const cultivoDB = await this._cultivoSiembraRepository.findOne({
      where: { id_cultivo: cultivoId, asociadoIdAsociado: asociadId },
    });
    if (!cultivoDB) {
      throw new NotFoundException({ message: 'Cultivo no encontrado' });
    }
    cultivoDB.nombre = dto.nombre;
    cultivoDB.niameIdNiame = dto.niameIdNiame;
    cultivoDB.fecha_inicio_siembra = dto.fecha_inicio_siembra;
    cultivoDB.fecha_fin_siembra = dto.fecha_fin_siembra;
    cultivoDB.hectareas_sembradas = dto.hectareas_sembradas;
    cultivoDB.kg_espera_cosechar = dto.kg_espera_cosechar;
    cultivoDB.costo_total_siembra = dto.costo_total_siembra;
    await this._cultivoSiembraRepository.update({ id_cultivo: cultivoId, asociadoIdAsociado: asociadId }, cultivoDB);
    return await this._cultivoSiembraRepository.findOne({
      where: { id_cultivo: cultivoId, asociadoIdAsociado: asociadId },
    });
  }
}
