import { EntityRepository, Repository } from 'typeorm';
import { TransporteDetalle } from './entities/transporte-detalle.entity';

@EntityRepository(TransporteDetalle)
export class TrasporteDetalleRepository extends Repository<TransporteDetalle> {}
