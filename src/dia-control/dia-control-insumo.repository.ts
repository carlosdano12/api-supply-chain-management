import { EntityRepository, Repository } from 'typeorm';
import { DiaControlInsumo } from './entities/dia_control_insumo.entity';

@EntityRepository(DiaControlInsumo)
export class DiaControlInsumosRepository extends Repository<DiaControlInsumo> {}
