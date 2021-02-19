import { EntityRepository, Repository } from 'typeorm';
import { Asociado } from './entities/associates.entity';

@EntityRepository(Asociado)
export class NiameRepository extends Repository<Asociado> {}
