import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Niame } from 'src/niame/entities/niame.entity';
import { getConnection } from 'typeorm';
import { RecibirNiame } from './dto/recibir-niame.dto';
import { TransporteDto } from './dto/transporte.dto';
import { TransporteDetalle } from './entities/transporte-detalle.entity';
import { Transporte } from './entities/transporte.entity';
import { TrasporteDetalleRepository } from './transporte-detalle.repository';
import { TrasporteRepository } from './transporte.repository';

@Injectable()
export class TransporteService {
  constructor(
    @InjectRepository(TrasporteRepository)
    private readonly _transporteRepository: TrasporteRepository,

    @InjectRepository(TrasporteDetalleRepository)
    private readonly _transporteDetalleRepository: TrasporteDetalleRepository,
  ) {}

  //TODO: enpoint para guardar los ñames entrantes en la tabla "transporte_detalle" y actualizar la cantidad de ñame en la tabla "niame"

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
        detalle.recibido = detalleDto.cantidad;

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

  async recibirNiame(recibirNiame: RecibirNiame[]) {
    console.log(recibirNiame[0]);

    await getConnection().transaction(async (transaction) => {
      const transportId = (await transaction.findOne(TransporteDetalle, recibirNiame[0].id))?.transporteId;

      await transaction.update(Transporte, transportId, { estado: true });
      await Promise.all(
        recibirNiame.map(async (dato) => {
          await transaction.update(TransporteDetalle, dato.id, {
            recibido: dato.recibido,
          });

          const niame = await transaction.findOne(Niame, dato.niameIdNiame);
          const suma = Number(niame.cantidad) + Number(dato.recibido);
          await transaction.update(Niame, niame.id_niame, { cantidad: suma });
        }),
      );
    });
  }
}
