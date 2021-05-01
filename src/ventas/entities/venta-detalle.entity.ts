import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiHideProperty } from '@nestjs/swagger';
import { VentaEncabezado } from './venta-encabezado.entity';
import { Niame } from '../../niame/entities/niame.entity';

@Entity('venta_detalle')
export class VentaDetalle extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiHideProperty()
  @ManyToOne(() => VentaEncabezado, (ventaEncabezado) => ventaEncabezado.id, {})
  @JoinColumn([{ name: 'ventaEncabezadoId', referencedColumnName: 'id' }])
  ventaEncabezado: VentaEncabezado;

  @Column({ nullable: false })
  ventaEncabezadoId: string;

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
