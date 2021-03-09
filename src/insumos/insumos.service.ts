import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsumoRepository } from './insumo.repository';

@Injectable()
export class InsumosService {
  constructor(
    @InjectRepository(InsumoRepository)
    private readonly _insumoRepository: InsumoRepository,
  ) {}

  async getMany() {
    return await this._insumoRepository.find();
  }
}
