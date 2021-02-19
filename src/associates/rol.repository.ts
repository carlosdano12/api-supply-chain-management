import { EntityRepository, Repository } from 'typeorm';
import { Rol } from './entities/associate_roles.entity';

@EntityRepository(Rol)
export class NiameRepository extends Repository<Rol> {}
