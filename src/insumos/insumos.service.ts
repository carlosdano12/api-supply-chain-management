import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateInsumoDto } from './dto/create-insumo.dto';
import { UpdateInsumoDto } from './dto/update-insumo.dto';

import { InsumoRepository } from './insumo.repository';

@Injectable()
export class InsumosService {
  constructor(
    @InjectRepository(InsumoRepository)
    private readonly _insumoRepository: InsumoRepository,
  ) {}

  async create(dto: CreateInsumoDto) {
    dto.disableAt = null;
    return await this._insumoRepository.save(dto);
  }

  async update(id: string, dto: UpdateInsumoDto) {
    return await this._insumoRepository.update(id, dto);
  }

  async delete(id: string) {
    await this._insumoRepository.update(id, { disableAt: new Date() });
  }

  async getMany() {
    return await this._insumoRepository.find();
  }
}
