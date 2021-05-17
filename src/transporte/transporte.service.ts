import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection } from 'typeorm';
import { TransporteDto } from './dto/transporte.dto';
import { TransporteDetalle } from './entities/transporte-detalle.entity';
import { TrasporteRepository } from './transporte.repository';

@Injectable()
export class TransporteService {
  constructor(
    @InjectRepository(TrasporteRepository)
    private readonly _transporteRepository: TrasporteRepository,
  ) {}
  async createOne(asocaidoId: string, dto: TransporteDto) {
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();

    await queryRunner.startTransaction();
    try {
      const transporte = this._transporteRepository.create({ asociadoIdAsociado: asocaidoId, nota: dto.nota });

      const transporteDB = await queryRunner.manager.save(transporte);
      const detalles: TransporteDetalle[] = [];
      for (let index = 0; index < dto.transporteDetalles.length; index++) {
        const detalleDto = dto.transporteDetalles[index];
        const detalle = new TransporteDetalle();

        detalle.transporteId = transporteDB.id;
        detalle.niameIdNiame = detalleDto.niameIdNiame;
        detalle.cantidad = detalleDto.cantidad;

        detalles.push(detalle);
      }
      await queryRunner.manager.save(detalles);

      await queryRunner.commitTransaction();
    } catch (err) {
      console.log('err', err);
      await queryRunner.rollbackTransaction();
      throw new InternalServerErrorException({ message: 'Ocurrio un Error al guardar la solicitud de transporte' });
    } finally {
      await queryRunner.release();
    }
  }

  async editOne(id: string, dto: TransporteDto) {
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();

    await queryRunner.startTransaction();
    const transporteDB = await this._transporteRepository.findOne(id);
    if (!transporteDB) {
      throw new NotFoundException({ message: 'No se encontro la solicitud de transporte' });
    }
    try {
      const delet = await queryRunner.manager.delete(TransporteDetalle, { transporteId: transporteDB.id });
      console.log('delet', delet);
      transporteDB.nota = dto.nota;
      await this._transporteRepository.update({ id }, transporteDB);
      const detalles: TransporteDetalle[] = [];
      for (let index = 0; index < dto.transporteDetalles.length; index++) {
        const detalleDto = dto.transporteDetalles[index];
        const detalle = new TransporteDetalle();

        detalle.transporteId = transporteDB.id;
        detalle.niameIdNiame = detalleDto.niameIdNiame;
        detalle.cantidad = detalleDto.cantidad;

        detalles.push(detalle);
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
    const transportes = await this._transporteRepository.find({
      where: { asociadoIdAsociado: asociadoId },
      relations: ['transporteDetalles'],
    });

    return transportes;
  }

  async getSolicitudes() {
    return await this._transporteRepository.getSolicitudes();
  }

  async toggleSolitud(id: string) {
    const transporte = await this._transporteRepository.findOne(id);
    if (!transporte) throw new BadRequestException('No encontrado el transporte');
    return await this._transporteRepository.update(id, { estado: !transporte.estado, fechaEntrega: new Date() });
  }
}
