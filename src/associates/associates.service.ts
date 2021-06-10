import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AsociadoRepository } from './associate.repository';
import { CreateAsociadoDto } from './dto/create_asociado.dto';
import { UpdateAsociadoDto } from './dto/update_asociado.dto';

@Injectable()
export class AssociatesService {
  constructor(
    @InjectRepository(AsociadoRepository)
    private readonly _asociadoRepository: AsociadoRepository,
  ) {}

  async getOne(id: string) {
    return await this._asociadoRepository.findOne({ where: { id_asociado: id } });
  }

  async getMany() {
    return await this._asociadoRepository.find();
  }

  async createOne(dto: CreateAsociadoDto) {
    const asociado = this._asociadoRepository.create({ ...dto });
    return await this._asociadoRepository.save(asociado);
  }

  async editOne(id_asociado: string, dto: UpdateAsociadoDto) {
    const asociadoDB = await this._asociadoRepository.findOne({ where: { id_asociado } });
    if (!asociadoDB) {
      throw new NotFoundException({ message: 'Asociado no encontrado' });
    }
    asociadoDB.nombre = dto.nombre;
    asociadoDB.apellido = dto.apellido;
    asociadoDB.id_documento = dto.id_documento;
    asociadoDB.documento = dto.documento;
    asociadoDB.telefono = dto.telefono;
    asociadoDB.roles = dto.roles;
    await this._asociadoRepository.update({ id_asociado }, asociadoDB);
    return await this._asociadoRepository.findOne({ id_asociado });
  }

  async validateLogin(documento: string, contrasena: string) {
    return await this._asociadoRepository.findOne({ where: { documento, contrasena }, relations: ['roles'] });
  }
}
