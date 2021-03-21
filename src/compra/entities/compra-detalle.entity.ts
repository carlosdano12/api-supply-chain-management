import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiHideProperty } from '@nestjs/swagger';
import { CompraEncabezado } from './compra-encabezado.entity';
import { Insumo } from '../../insumos/entities/insumo.entity';

@Entity('compra_detalle')
export class CompraDetalle extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiHideProperty()
  @ManyToOne(() => CompraEncabezado, (compraEncabezado) => compraEncabezado.id, {})
  @JoinColumn([{ name: 'compraEncabezadoId', referencedColumnName: 'id' }])
  compraEncabezado: CompraEncabezado;

  @Column({ nullable: false })
  compraEncabezadoId: string;

  @ApiHideProperty()
  @ManyToOne(() => Insumo, (insumo) => insumo.id, { eager: true })
  insumo: Insumo;

  @Column({ nullable: false })
  insumoId: string;

  @Column({ type: 'decimal', precision: 13, scale: 2, nullable: true })
  cantidad: number;

  @Column({ type: 'boolean', nullable: false, default: false })
  estado: boolean;
}
