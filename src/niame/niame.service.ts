import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NiameRepository } from './niame.repository';

@Injectable()
export class NiameService {
  constructor(
    @InjectRepository(NiameRepository)
    private readonly _niameRepository: NiameRepository,
  ) {}

  async getOne(id: string) {
    return await this._niameRepository.findOne({ where: { id_niame: id } });
  }

  async getMany() {
    return await this._niameRepository.find();
  }

  async createOne(nombre: string) {
    const niame = this._niameRepository.create({ nombre });
    return await this._niameRepository.save(niame);
  }

  async editOne(id_niame: string, nombre: string) {
    const niameDB = await this._niameRepository.findOne({ where: { id_niame } });
    if (!niameDB) {
      throw new NotFoundException({ message: 'Niame no encontrado' });
    }
    niameDB.nombre = nombre;
    await this._niameRepository.update({ id_niame }, niameDB);
    return await this._niameRepository.findOne({ id_niame });
  }
}
