import { EntityRepository, Repository } from 'typeorm';
import { DiaControl } from './entities/dia_control.entity';

@EntityRepository(DiaControl)
export class DiaControlRepository extends Repository<DiaControl> {}
