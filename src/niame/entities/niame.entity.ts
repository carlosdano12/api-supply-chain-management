import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('niames')
export class Niame extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id_niame: string;

  @Column({ type: 'varchar', unique: false, length: 45, nullable: false })
  nombre: string;
}
