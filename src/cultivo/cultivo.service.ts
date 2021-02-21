import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CultivoSiembraRepository } from './cultivo.repository';

@Injectable()
export class CultivoService {
  constructor(
    @InjectRepository(CultivoSiembraRepository)
    private readonly _cultivoSiembraRepository: CultivoSiembraRepository,
  ) {}

  async getManyByAsociado(asociadoId: string) {
    return await this._cultivoSiembraRepository.find({ where: { asociadoId: asociadoId } });
  }
}
