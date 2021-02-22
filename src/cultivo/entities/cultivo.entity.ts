import { Asociado } from '../../associates/entities/associates.entity';
import { Niame } from '../../niame/entities/niame.entity';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';

@Entity('cultivo_siembras')
export class CultivoSiembra extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id_cultivo: string;

  @ApiHideProperty()
  @ManyToOne(() => Asociado, (asociado) => asociado.id_asociado)
  asociado: Asociado;

  @Column({ nullable: false })
  asociadoIdAsociado: string;

  @Column({ type: 'varchar', unique: false, length: 45, nullable: false })
  nombre: string;

  @ApiHideProperty()
  @ManyToOne(() => Niame, (niame) => niame.id_niame)
  niame: Niame;

  @Column({ nullable: false })
  niameIdNiame: string;

  @ApiProperty({ format: 'date' })
  @Column({ type: 'date', nullable: false })
  fecha_inicio_siembra: Date;

  @ApiProperty({ format: 'date' })
  @Column({ type: 'date', nullable: false })
  fecha_fin_siembra: Date;

  @Column({ type: 'decimal', precision: 13, scale: 2, nullable: true })
  hectareas_sembradas: number;

  @Column({ type: 'decimal', precision: 13, scale: 2, nullable: true })
  kg_espera_cosechar: number;

  @Column({ type: 'decimal', precision: 13, scale: 2, nullable: true })
  costo_total_siembra: number;

  @Column({ type: 'boolean', nullable: false, default: true })
  estado: boolean;
}
