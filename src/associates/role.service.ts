import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RolRepository } from './rol.repository';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RolRepository)
    private readonly rolRepository: RolRepository,
  ) {}

  async getOne(id: string) {
    return await this.rolRepository.findOne({ where: { id_rol: id } });
  }

  async getMany() {
    return await this.rolRepository.find();
  }

  async createOne(nombre: string) {
    const rol = this.rolRepository.create({ nombre });
    return await this.rolRepository.save(rol);
  }

  async editOne(id_rol: string, nombre: string) {
    const role = await this.rolRepository.findOne({ where: { id_rol } });
    if (!role) {
      throw new NotFoundException({ message: 'Rol no encontrado' });
    }
    role.nombre = nombre;
    await this.rolRepository.update({ id_rol }, role);
    return await this.rolRepository.findOne({ id_rol });
  }
}
