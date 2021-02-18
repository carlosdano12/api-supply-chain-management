import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cultivo_siembras')
export class CultivoSiemba extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id_cultivo: string;

  @Column({ type: 'varchar', unique: false, length: 45, nullable: false })
  nombre: string;
}
