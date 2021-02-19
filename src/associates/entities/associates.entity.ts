import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Rol } from './associate_roles.entity';

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

  @ManyToMany(() => Rol, (rol) => rol.asociados, { nullable: false })
  @JoinTable()
  roles: Rol[];
}
