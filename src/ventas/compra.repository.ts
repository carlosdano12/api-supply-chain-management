import { EntityRepository, Repository } from 'typeorm';
import { VentaEncabezado } from './entities/venta-encabezado.entity';

@EntityRepository(VentaEncabezado)
export class VentaEncabezadoRepository extends Repository<VentaEncabezado> {}
