import { EntityRepository, Repository } from 'typeorm';
import { Transporte } from './entities/transporte.entity';

@EntityRepository(Transporte)
export class TrasporteRepository extends Repository<Transporte> {
  //nombre del ñame
  //Id
  async getSolicitudes() {
    return await this.createQueryBuilder('t1')
      .leftJoinAndSelect('t1.transporteDetalles', 't2')
      .leftJoinAndSelect('t2.Niame', 't3')
      .where('t1.estado = 0')
      .getMany();
  }
}
