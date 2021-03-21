import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection } from 'typeorm';
import { CompraEncabezadoRepository } from './compra.repository';
import { CompraDto } from './dto/compra.dto';
import { CompraDetalle } from './entities/compra-detalle.entity';

@Injectable()
export class CompraService {
  constructor(
    @InjectRepository(CompraEncabezadoRepository)
    private readonly _compraEncabezadoRepository: CompraEncabezadoRepository,
  ) {}
  async createOne(asocaidoId: string, dto: CompraDto) {
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();

    await queryRunner.startTransaction();
    try {
      const compra = this._compraEncabezadoRepository.create({ asociadoIdAsociado: asocaidoId, nota: dto.nota });

      const compraDB = await queryRunner.manager.save(compra);
      const detalles: CompraDetalle[] = [];
      for (let index = 0; index < dto.compraDetalles.length; index++) {
        const insumoDto = dto.compraDetalles[index];
        const insumo = new CompraDetalle();

        insumo.compraEncabezadoId = compraDB.id;
        insumo.insumoId = insumoDto.insumoId;
        insumo.cantidad = insumoDto.cantidad;

        detalles.push(insumo);
      }
      await queryRunner.manager.save(detalles);

      await queryRunner.commitTransaction();
    } catch (err) {
      console.log('err', err);
      await queryRunner.rollbackTransaction();
      throw new InternalServerErrorException({ message: 'Ocurrio un Error al guardar la solicitud de compra' });
    } finally {
      await queryRunner.release();
    }
  }

  async editOne(id: string, dto: CompraDto) {
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();

    await queryRunner.startTransaction();
    const compraDB = await this._compraEncabezadoRepository.findOne(id);
    if (!compraDB) {
      throw new NotFoundException({ message: 'No se encontro la solicitud de compra' });
    }
    try {
      const delet = await queryRunner.manager.delete(CompraDetalle, { compraEncabezadoId: compraDB.id });
      console.log('delet', delet);
      compraDB.nota = dto.nota;
      await this._compraEncabezadoRepository.update({ id }, compraDB);
      const detalles: CompraDetalle[] = [];
      for (let index = 0; index < dto.compraDetalles.length; index++) {
        const insumoDto = dto.compraDetalles[index];
        const insumo = new CompraDetalle();

        insumo.compraEncabezadoId = compraDB.id;
        insumo.insumoId = insumoDto.insumoId;
        insumo.cantidad = insumoDto.cantidad;

        detalles.push(insumo);
      }
      await queryRunner.manager.save(detalles);

      await queryRunner.commitTransaction();
    } catch (err) {
      console.log('err', err);
      await queryRunner.rollbackTransaction();
      throw new InternalServerErrorException({ message: 'Ocurrio un Error al actualizar el dia de control' });
    } finally {
      await queryRunner.release();
    }
  }

  async getMany(asociadoId: string) {
    const compras = await this._compraEncabezadoRepository.find({
      where: { asociadoIdAsociado: asociadoId },
      relations: ['compraDetalles'],
    });

    return compras;
  }
}
