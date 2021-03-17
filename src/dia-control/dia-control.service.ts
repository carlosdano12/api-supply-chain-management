import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection } from 'typeorm';
import { DiaControlRepository } from './dia-control.repository';
import { DiaControlInsumo } from './entities/dia_control_insumo.entity';
import { DiaControlDto } from './dtos/dia_control.dto';
import { DiaControl } from './entities/dia_control.entity';

@Injectable()
export class DiaControlService {
  constructor(
    @InjectRepository(DiaControlRepository)
    private readonly _diaControlRepository: DiaControlRepository,
  ) {}
  async createOne(dto: DiaControlDto) {
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();

    await queryRunner.startTransaction();
    try {
      const diaControl = this._diaControlRepository.create({
        fechaControl: dto.fechaControl,
        descripcion: dto.descripcion,
        cultivoIdCultivo: dto.cultivoIdCultivo,
      });

      const diaControlDB = await queryRunner.manager.save(diaControl);
      const insumos: DiaControlInsumo[] = [];
      for (let index = 0; index < dto.diasControlInsumos.length; index++) {
        const insumoDto = dto.diasControlInsumos[index];
        const insumo = new DiaControlInsumo();

        insumo.diaControlId = diaControlDB.id;
        insumo.insumoId = insumoDto.insumoId;
        insumo.cantidad = insumoDto.cantidad;

        insumos.push(insumo);
      }
      await queryRunner.manager.save(insumos);

      await queryRunner.commitTransaction();
    } catch (err) {
      console.log('err', err);
      await queryRunner.rollbackTransaction();
      throw new InternalServerErrorException({ message: 'Ocurrio un Error al guardar el dia de control' });
    } finally {
      await queryRunner.release();
    }
  }

  async editOne(id: string, dto: DiaControlDto) {
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();

    await queryRunner.startTransaction();
    const diaControlDB = await this._diaControlRepository.findOne(id);
    if (!diaControlDB) {
      throw new NotFoundException({ message: 'No se encontro el dia de control' });
    }
    try {
      const delet = await queryRunner.manager.delete(DiaControlInsumo, { diaControlId: diaControlDB.id });
      console.log('delet', delet);
      diaControlDB.fechaControl = dto.fechaControl;
      diaControlDB.descripcion = dto.descripcion;
      await this._diaControlRepository.update({ id }, diaControlDB);
      const insumos: DiaControlInsumo[] = [];
      for (let index = 0; index < dto.diasControlInsumos.length; index++) {
        const insumoDto = dto.diasControlInsumos[index];
        const insumo = new DiaControlInsumo();

        insumo.diaControlId = diaControlDB.id;
        insumo.insumoId = insumoDto.insumoId;
        insumo.cantidad = insumoDto.cantidad;

        insumos.push(insumo);
      }
      await queryRunner.manager.save(insumos);

      await queryRunner.commitTransaction();
    } catch (err) {
      console.log('err', err);
      await queryRunner.rollbackTransaction();
      throw new InternalServerErrorException({ message: 'Ocurrio un Error al actualizar el dia de control' });
    } finally {
      await queryRunner.release();
    }
  }

  async getMany(cultivoId: string) {
    const diasControl = await this._diaControlRepository.find({
      where: { cultivoIdCultivo: cultivoId },
      relations: ['diasControlInsumos'],
    });

    return diasControl;
  }
}
