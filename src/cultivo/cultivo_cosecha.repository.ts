import { EntityRepository, Repository } from 'typeorm';
import { CultivoCosecha } from './entities/cultivo_cosecha.entity';

@EntityRepository(CultivoCosecha)
export class CultivoCosechaRepository extends Repository<CultivoCosecha> {}
