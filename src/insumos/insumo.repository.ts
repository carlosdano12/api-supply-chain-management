import { EntityRepository, Repository } from 'typeorm';
import { Insumo } from './entities/insumo.entity';

@EntityRepository(Insumo)
export class InsumoRepository extends Repository<Insumo> {}
