import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('roles')
export class Rol extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id_rol: string;

  @Column({ type: 'varchar', unique: false, length: 45, nullable: false })
  nombre: string;
}
