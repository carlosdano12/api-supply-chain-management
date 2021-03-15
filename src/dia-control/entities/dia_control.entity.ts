import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { CultivoSiembra } from '../../cultivo/entities/cultivo.entity';
import { DiaControlInsumo } from './dia_control_insumo.entity';

@Entity('dias_control')
export class DiaControl extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ format: 'date' })
  @Column({ type: 'date', nullable: false })
  fechaControl: Date;

  @Column({ type: 'varchar', unique: false, length: 200, nullable: false })
  descripcion: string;

  @ApiHideProperty()
  @ManyToOne(() => CultivoSiembra, (cultivoSiembra) => cultivoSiembra.id_cultivo)
  @JoinColumn([{ name: 'cultivoIdCultivo', referencedColumnName: 'id_cultivo' }])
  cultivo: CultivoSiembra;

  @Column({ nullable: false })
  cultivoIdCultivo: string;

  @OneToMany(() => DiaControlInsumo, (diaControlInsumo) => diaControlInsumo.diaControl)
  diasControlInsumos: DiaControlInsumo[];
}
