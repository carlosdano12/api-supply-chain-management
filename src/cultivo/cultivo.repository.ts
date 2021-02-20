import { EntityRepository, Repository } from 'typeorm';
import { CultivoSiembra } from './entities/cultivo.entity';

@EntityRepository(CultivoSiembra)
export class CultivoSiembraRepository extends Repository<CultivoSiembra> {}
