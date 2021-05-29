import { EntityRepository, Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';

@EntityRepository(Cliente)
export class ClienteRepository extends Repository<Cliente> {}
