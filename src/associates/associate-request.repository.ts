import { EntityRepository, Repository } from 'typeorm';
import { AsociadoRequest } from './entities/associate_request.entity';

@EntityRepository(AsociadoRequest)
export class AsociadoRequestRepository extends Repository<AsociadoRequest> {}
