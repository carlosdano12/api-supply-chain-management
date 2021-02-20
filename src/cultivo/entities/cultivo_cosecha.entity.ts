import { CultivoSiembra } from './cultivo.entity';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Asociado } from '../../associates/entities/associates.entity';

@Entity('cultivo_cosecha')
export class CultivoCosecha extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => CultivoSiembra, (cultivoSiembra) => cultivoSiembra.id_cultivo)
  cultivo: CultivoSiembra;

  @Column({ nullable: false })
  cultivoId: string;

  @ManyToOne(() => Asociado, (asociado) => asociado.id_asociado)
  asociado: Asociado;

  @Column({ nullable: false })
  asociadoId: string;

  @Column({ type: 'date', nullable: false })
  fecha_inicio_cosecha: Date;

  @Column({ type: 'date', nullable: false })
  fecha_fin_cosecha: Date;

  @Column({ type: 'decimal', precision: 13, scale: 2, nullable: true })
  kg_cosechados: number;

  @Column({ type: 'decimal', precision: 13, scale: 2, nullable: true })
  kg_cosechados_bien: number;

  @Column({ type: 'decimal', precision: 13, scale: 2, nullable: true })
  costo_total_cosecha: number;
}
