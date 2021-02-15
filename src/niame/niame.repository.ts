import { EntityRepository, Repository } from 'typeorm';
import { Niame } from './entities/niame.entity';

@EntityRepository(Niame)
export class NiameRepository extends Repository<Niame> {}
