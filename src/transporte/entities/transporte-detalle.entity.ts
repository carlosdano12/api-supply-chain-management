import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiHideProperty } from '@nestjs/swagger';
import { Transporte } from './transporte.entity';
import { Niame } from '../../niame/entities/niame.entity';

@Entity('transporte_detalle')
export class TransporteDetalle extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiHideProperty()
  @ManyToOne(() => Transporte, (transporte) => transporte.id, {})
  @JoinColumn([{ name: 'transporteId', referencedColumnName: 'id' }])
  transporte: Transporte;

  @Column({ nullable: false })
  transporteId: string;

  @ApiHideProperty()
  @ManyToOne(() => Niame, (niame) => niame.id_niame, { eager: true })
  niame: Niame;

  @Column({ nullable: false })
  niameIdNiame: string;

  @Column({ type: 'decimal', precision: 13, scale: 2, nullable: true })
  cantidad: number;

  @Column({ type: 'boolean', nullable: false, default: false })
  estado: boolean;
}
