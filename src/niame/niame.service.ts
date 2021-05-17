import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NiameDto } from './dto/niame.dto';
import { UpdateNiameDto } from './dto/update-name.dto';
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

  async createOne(dto: NiameDto) {
    const niame = this._niameRepository.create(dto);
    return await this._niameRepository.save(niame);
  }

  async editOne(id_niame: string, dto: UpdateNiameDto) {
    const niameDB = await this._niameRepository.findOne({ where: { id_niame } });
    if (!niameDB) {
      throw new NotFoundException({ message: 'Niame no encontrado' });
    }

    niameDB.nombre = dto?.nombre ? dto.nombre : niameDB.nombre;
    niameDB.precio = dto?.precio ? dto.precio : niameDB.precio;
    niameDB.cantidad = dto?.cantidad ? dto.cantidad : niameDB.cantidad;

    await this._niameRepository.update(id_niame, niameDB);
    return await this._niameRepository.findOne({ id_niame });
  }
}
