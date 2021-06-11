import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AsociadoRequestRepository } from './associate-request.repository';
import { CreateAsociadoRequestDto } from './dto/create_asociado_request.dto';

@Injectable()
export class AssociatesRequestService {
  constructor(
    @InjectRepository(AsociadoRequestRepository)
    private readonly _asociadoRequestRepository: AsociadoRequestRepository,
  ) {}

  async getOne(id: string) {
    return await this._asociadoRequestRepository.findOne({ where: { id: id } });
  }

  async getMany() {
    return await this._asociadoRequestRepository.find({ where: { estado: true } });
  }

  async createOne(dto: CreateAsociadoRequestDto) {
    const asociado = this._asociadoRequestRepository.create({ ...dto });
    return await this._asociadoRequestRepository.save(asociado);
  }
}
