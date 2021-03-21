import { EntityRepository, Repository } from 'typeorm';
import { CompraEncabezado } from './entities/compra-encabezado.entity';

@EntityRepository(CompraEncabezado)
export class CompraEncabezadoRepository extends Repository<CompraEncabezado> {}
