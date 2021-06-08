import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Niame } from 'src/niame/entities/niame.entity';
import { getConnection } from 'typeorm';
import { VentaEncabezadoRepository } from './compra.repository';
import { VentaDto } from './dto/venta.dto';
import { VentaDetalle } from './entities/venta-detalle.entity';

@Injectable()
export class VentasService {
  constructor(
    @InjectRepository(VentaEncabezadoRepository)
    private readonly _ventaEncabezadoRepository: VentaEncabezadoRepository,
  ) {}
  async createOne(asocaidoId: string, dto: VentaDto) {
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();

    await queryRunner.startTransaction();
    try {
      const venta = this._ventaEncabezadoRepository.create({
        asociadoIdAsociado: asocaidoId,
        nota: dto.nota,
        total: dto.total,
      });

      const ventaDB = await queryRunner.manager.save(venta);
      const detalles: VentaDetalle[] = [];
      for (let index = 0; index < dto.ventaDetalles.length; index++) {
        const niameDto = dto.ventaDetalles[index];
        const niame = new VentaDetalle();
        const niameSaved = await queryRunner.manager.findOne(Niame, niameDto.niameId);

        await queryRunner.manager.update(Niame, niameDto.niameId, {
          cantidad: niameSaved.cantidad - niameDto.cantidad,
        });

        niame.ventaEncabezadoId = ventaDB.id;
        niame.niameIdNiame = niameDto.niameId;
        niame.cantidad = niameDto.cantidad;
        niame.precio = niameDto.precio;
        niame.total = niameDto.total;

        detalles.push(niame);
      }
      await queryRunner.manager.save(detalles);

      await queryRunner.commitTransaction();
    } catch (err) {
      console.log('err', err);
      await queryRunner.rollbackTransaction();
      throw new InternalServerErrorException({ message: 'Ocurrio un Error al guardar la solicitud de venta' });
    } finally {
      await queryRunner.release();
    }
  }

  async editOne(id: string, dto: VentaDto) {
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();

    await queryRunner.startTransaction();
    const ventaDB = await this._ventaEncabezadoRepository.findOne(id);
    if (!ventaDB) {
      throw new NotFoundException({ message: 'No se encontro la solicitud de venta' });
    }
    try {
      const delet = await queryRunner.manager.delete(VentaDetalle, { ventaEncabezadoId: ventaDB.id });
      console.log('delet', delet);
      ventaDB.nota = dto.nota;
      await this._ventaEncabezadoRepository.update({ id }, ventaDB);
      const detalles: VentaDetalle[] = [];
      for (let index = 0; index < dto.ventaDetalles.length; index++) {
        const niameDto = dto.ventaDetalles[index];
        const niame = new VentaDetalle();

        niame.ventaEncabezadoId = ventaDB.id;
        niame.niameIdNiame = niameDto.niameId;
        niame.cantidad = niameDto.cantidad;

        detalles.push(niame);
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

  async getMany() {
    const ventas = await this._ventaEncabezadoRepository.find({
      relations: ['ventaDetalles'],
    });

    return ventas;
  }
}
