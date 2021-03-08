import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiHideProperty } from '@nestjs/swagger';
import { DiaControl } from './dia_control.entity';
import { Insumo } from '../../insumos/entities/insumo.entity';

@Entity('dias_control_insumos')
export class DiaControlInsumo extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiHideProperty()
  @ManyToOne(() => DiaControl, (diaControl) => diaControl.id)
  diaControl: DiaControl;

  @Column({ nullable: false })
  diaControlId: string;

  @ApiHideProperty()
  @ManyToOne(() => Insumo, (insumo) => insumo.id)
  insumo: Insumo;

  @Column({ nullable: false })
  insumoId: string;

  @Column({ type: 'decimal', precision: 13, scale: 2, nullable: true })
  cantidad: number;
}
