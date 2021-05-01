import { Asociado } from '../../associates/entities/associates.entity';
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { VentaDetalle } from './venta-detalle.entity';

@Entity('ventas_encabezado')
export class VentaEncabezado extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiHideProperty()
  @ManyToOne(() => Asociado, (asociado) => asociado.id_asociado)
  asociado: Asociado;

  @Column({ nullable: false })
  asociadoIdAsociado: string;

  @Column({ type: 'varchar', unique: false, length: 45, nullable: false })
  nota: string;

  @ApiProperty({ format: 'date' })
  @Column({ type: 'date', nullable: false, default: () => 'now()' })
  fechaVenta: Date;

  @Column({ type: 'boolean', nullable: false, default: false })
  estado: boolean;

  @OneToMany(() => VentaDetalle, (ventaDetalle) => ventaDetalle.ventaEncabezado)
  ventaDetalles: VentaDetalle[];
}
