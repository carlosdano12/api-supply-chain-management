import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClienteRepository } from './cliente.repository';
import { CreateClienteDto } from './dto/create_cliente.dto';
import { UpdateClienteDto } from './dto/update_cliente.dto';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(ClienteRepository)
    private readonly _clienteRepository: ClienteRepository,
  ) {}

  async getOne(id: string) {
    return await this._clienteRepository.findOne({ where: { id: id } });
  }

  async getMany() {
    return await this._clienteRepository.find();
  }

  async createOne(dto: CreateClienteDto) {
    const cliente = this._clienteRepository.create(dto);
    return await this._clienteRepository.save(cliente);
  }

  async editOne(id: string, dto: UpdateClienteDto) {
    const clienteDB = await this._clienteRepository.findOne({ where: { id } });
    if (!clienteDB) {
      throw new NotFoundException({ message: 'Cliente no encontrado' });
    }
    clienteDB.nombre = dto.nombre;
    clienteDB.apellido = dto.apellido;
    clienteDB.documento = dto.documento;
    clienteDB.telefono = dto.telefono;
    await this._clienteRepository.update({ id }, clienteDB);
    return await this._clienteRepository.findOne({ id });
  }
}
