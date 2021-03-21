import { EntityRepository, Repository } from 'typeorm';
import { CompraDetalle } from './entities/compra-detalle.entity';

@EntityRepository(CompraDetalle)
export class CompraDetalleRepository extends Repository<CompraDetalle> {}
