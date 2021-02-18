import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('asociados')
export class Asociado extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id_asociado: string;

  @Column({ type: 'varchar', unique: false, length: 45, nullable: false })
  nombre: string;

  @Column({ type: 'varchar', unique: false, length: 45, nullable: false })
  apellido: string;

  @Column({ type: 'smallint', unique: false, nullable: false })
  id_documento: number;

  @Column({ type: 'varchar', unique: true, length: 15, nullable: false })
  documento: string;

  @Column({ type: 'varchar', unique: false, length: 50, nullable: false })
  contrasena: string;

  @Column({ type: 'varchar', unique: true, length: 15, nullable: false })
  telefono: string;
}
