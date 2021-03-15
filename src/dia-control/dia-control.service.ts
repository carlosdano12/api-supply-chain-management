import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection } from 'typeorm';
import { DiaControlRepository } from './dia-control.repository';
import { DiaControlInsumo } from './entities/dia_control_insumo.entity';
import { IDiaControl } from './dtos/dia_control.dto';

@Injectable()
export class DiaControlService {
  constructor(
    @InjectRepository(DiaControlRepository)
    private readonly _diaControlRepository: DiaControlRepository,
  ) {}
  async createOne(dto: IDiaControl) {
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

  async getMany(cultivoId: string) {
    const diasControl = await this._diaControlRepository.find({
      where: { cultivoIdCultivo: cultivoId },
      relations: ['diasControlInsumos'],
    });

    return diasControl;
  }
}
