import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CultivoCosechaRepository } from './cultivo_cosecha.repository';
import { CultivoCosechaDto } from './dto/cultivo_cosecha.dto';

@Injectable()
export class CultivoCosechaService {
  constructor(
    @InjectRepository(CultivoCosechaRepository)
    private readonly _cultivoCosechaRepository: CultivoCosechaRepository,
  ) {}

  async createOne(dto: CultivoCosechaDto) {
    const cultivoCosecha = this._cultivoCosechaRepository.create(dto);
    return await this._cultivoCosechaRepository.save(cultivoCosecha);
  }

  async getOne(id: string) {
    return await this._cultivoCosechaRepository.findOne({
      where: { id },
    });
  }

  async getManyByCultivo(cultivoId: string) {
    return await this._cultivoCosechaRepository.find({ where: { cultivoIdCultivo: cultivoId } });
  }

  async editOne(id: string, dto: CultivoCosechaDto) {
    const cultivoCosechaDB = await this._cultivoCosechaRepository.findOne({ where: { id } });
    if (!cultivoCosechaDB) {
      throw new NotFoundException({ message: 'Cosecha no encontrada' });
    }
    cultivoCosechaDB.fecha_inicio_cosecha = dto.fecha_inicio_cosecha;
    cultivoCosechaDB.fecha_fin_cosecha = dto.fecha_fin_cosecha;
    cultivoCosechaDB.kg_cosechados = dto.kg_cosechados;
    cultivoCosechaDB.kg_cosechados_bien = dto.kg_cosechados_bien;
    cultivoCosechaDB.costo_total_cosecha = dto.costo_total_cosecha;
    await this._cultivoCosechaRepository.update({ id }, cultivoCosechaDB);
    return await this._cultivoCosechaRepository.findOne({ where: { id } });
  }
}
