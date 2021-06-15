import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Asociado } from './associates.entity';

@Entity('roles')
export class Rol extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id_rol: string;

  @Column({ type: 'varchar', unique: false, length: 45, nullable: false })
  nombre: string;

  @ManyToMany(() => Asociado, (asociado) => asociado.roles, { nullable: false })
  asociados?: Asociado[];
}
