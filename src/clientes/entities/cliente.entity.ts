import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('clientes')
export class Cliente extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', unique: false, length: 45, nullable: false })
  nombre: string;

  @Column({ type: 'varchar', unique: false, length: 45, nullable: false })
  apellido: string;

  @Column({ type: 'varchar', unique: true, length: 15, nullable: false })
  documento: string;

  @Column({ type: 'varchar', unique: true, length: 15, nullable: false })
  telefono: string;
}
