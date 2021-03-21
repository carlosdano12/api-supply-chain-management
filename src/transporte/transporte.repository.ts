import { EntityRepository, Repository } from 'typeorm';
import { Transporte } from './entities/transporte.entity';

@EntityRepository(Transporte)
export class TrasporteRepository extends Repository<Transporte> {}
