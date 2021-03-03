import { MigrationInterface, QueryRunner } from 'typeorm';

export class insumos1614743978898 implements MigrationInterface {
  name = 'insumos1614743978898';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `insumos` (`id` varchar(36) NOT NULL, `nombre` varchar(45) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'ALTER TABLE `cultivo_siembras` CHANGE `hectareas_sembradas` `hectareas_sembradas` decimal(13,2) NULL',
    );
    await queryRunner.query(
      'ALTER TABLE `cultivo_siembras` CHANGE `kg_espera_cosechar` `kg_espera_cosechar` decimal(13,2) NULL',
    );
    await queryRunner.query(
      'ALTER TABLE `cultivo_siembras` CHANGE `costo_total_siembra` `costo_total_siembra` decimal(13,2) NULL',
    );
    await queryRunner.query('ALTER TABLE `cultivo_cosecha` CHANGE `kg_cosechados` `kg_cosechados` decimal(13,2) NULL');
    await queryRunner.query(
      'ALTER TABLE `cultivo_cosecha` CHANGE `kg_cosechados_bien` `kg_cosechados_bien` decimal(13,2) NULL',
    );
    await queryRunner.query(
      'ALTER TABLE `cultivo_cosecha` CHANGE `costo_total_cosecha` `costo_total_cosecha` decimal(13,2) NULL',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE `cultivo_cosecha` CHANGE `costo_total_cosecha` `costo_total_cosecha` decimal(13,2) NULL DEFAULT 'NULL'",
    );
    await queryRunner.query(
      "ALTER TABLE `cultivo_cosecha` CHANGE `kg_cosechados_bien` `kg_cosechados_bien` decimal(13,2) NULL DEFAULT 'NULL'",
    );
    await queryRunner.query(
      "ALTER TABLE `cultivo_cosecha` CHANGE `kg_cosechados` `kg_cosechados` decimal(13,2) NULL DEFAULT 'NULL'",
    );
    await queryRunner.query(
      "ALTER TABLE `cultivo_siembras` CHANGE `costo_total_siembra` `costo_total_siembra` decimal(13,2) NULL DEFAULT 'NULL'",
    );
    await queryRunner.query(
      "ALTER TABLE `cultivo_siembras` CHANGE `kg_espera_cosechar` `kg_espera_cosechar` decimal(13,2) NULL DEFAULT 'NULL'",
    );
    await queryRunner.query(
      "ALTER TABLE `cultivo_siembras` CHANGE `hectareas_sembradas` `hectareas_sembradas` decimal(13,2) NULL DEFAULT 'NULL'",
    );
    await queryRunner.query('DROP TABLE `insumos`');
  }
}
