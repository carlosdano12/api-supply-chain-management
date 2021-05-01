import { EntityRepository, Repository } from 'typeorm';
import { VentaDetalle } from './entities/venta-detalle.entity';

@EntityRepository(VentaDetalle)
export class VentaDetalleRepository extends Repository<VentaDetalle> {}
