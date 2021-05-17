import { EntityRepository, Repository } from 'typeorm';
import { Transporte } from './entities/transporte.entity';

@EntityRepository(Transporte)
export class TrasporteRepository extends Repository<Transporte> {
  async getSolicitudes() {
    return await this.createQueryBuilder('t1')
      .leftJoinAndSelect('t1.transporteDetalles', 't2')
      .where('t1.estado = 0')
      .getMany();
  }
}
