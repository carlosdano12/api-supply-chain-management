import { EntityRepository, Repository } from 'typeorm';
import { Asociado } from './entities/associates.entity';

@EntityRepository(Asociado)
export class AsociadoRepository extends Repository<Asociado> {}
