import { Asociado } from '../../associates/entities/associates.entity';
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { TransporteDetalle } from './transporte-detalle.entity';

@Entity('transporte')
export class Transporte extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiHideProperty()
  @ManyToOne(() => Asociado, (asociado) => asociado.id_asociado)
  asociado: Asociado;

  @Column({ nullable: false })
  asociadoIdAsociado: string;

  @Column({ type: 'varchar', unique: false, length: 45, nullable: true })
  nota: string;

  @ApiProperty({ format: 'date' })
  @Column({ type: 'date', nullable: false, default: () => 'now()' })
  fechaSolicitud: Date;

  @ApiProperty({ format: 'date' })
  @Column({ type: 'date', nullable: false, default: () => 'now()' })
  fechaEntrega: Date;

  @Column({ type: 'boolean', nullable: false, default: false })
  estado: boolean;

  @OneToMany(() => TransporteDetalle, (transporteDetalle) => transporteDetalle.transporte)
  transporteDetalles: TransporteDetalle[];
}
