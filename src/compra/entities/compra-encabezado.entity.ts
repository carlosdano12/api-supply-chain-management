import { Asociado } from '../../associates/entities/associates.entity';
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { CompraDetalle } from './compra-detalle.entity';

@Entity('compras_encabezado')
export class CompraEncabezado extends BaseEntity {
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
  fechaCompra: Date;

  @Column({ type: 'decimal', precision: 13, scale: 2, nullable: true })
  total: number;

  @Column({ type: 'boolean', nullable: false, default: false })
  estado: boolean;

  @OneToMany(() => CompraDetalle, (compraDetalle) => compraDetalle.compraEncabezado)
  compraDetalles: CompraDetalle[];
}
