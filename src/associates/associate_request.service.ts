import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AsociadoRequestRepository } from './associate-request.repository';
import { CreateAsociadoRequestDto } from './dto/create_asociado_request.dto';
import { UpdateAsociadoRequestDto } from './dto/update_asociado_request.dto';

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

  async editOne(id: string, dto: UpdateAsociadoRequestDto) {
    const asociadoDB = await this._asociadoRequestRepository.findOne({ where: { id } });
    if (!asociadoDB) {
      throw new NotFoundException({ message: 'Solicitude de Asociado no encontrada' });
    }
    asociadoDB.nombre = dto.nombre;
    asociadoDB.apellido = dto.apellido;
    asociadoDB.documento = dto.documento;
    asociadoDB.telefono = dto.telefono;
    asociadoDB.descripcion = dto.descripcion;
    await this._asociadoRequestRepository.update({ id }, asociadoDB);
    return await this._asociadoRequestRepository.findOne({ id });
  }
}
