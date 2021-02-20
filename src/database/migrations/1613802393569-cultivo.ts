import { MigrationInterface, QueryRunner } from 'typeorm';

export class cultivo1613802393569 implements MigrationInterface {
  name = 'cultivo1613802393569';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `cultivo_siembras` (`id_cultivo` varchar(36) NOT NULL, `asociadoId` varchar(255) NOT NULL, `nombre` varchar(45) NOT NULL, `niameId` varchar(255) NOT NULL, `fecha_inicio_siembra` date NOT NULL, `fecha_fin_siembra` date NOT NULL, `hectareas_sembradas` decimal(13,2) NULL, `kg_espera_cosechar` decimal(13,2) NULL, `costo_total_siembra` decimal(13,2) NULL, `estado` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (`id_cultivo`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'CREATE TABLE `cultivo_cosecha` (`id` varchar(36) NOT NULL, `cultivoId` varchar(255) NOT NULL, `asociadoId` varchar(255) NOT NULL, `fecha_inicio_cosecha` date NOT NULL, `fecha_fin_cosecha` date NOT NULL, `kg_cosechados` decimal(13,2) NULL, `kg_cosechados_bien` decimal(13,2) NULL, `costo_total_cosecha` decimal(13,2) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `cultivo_cosecha`');
    await queryRunner.query('DROP TABLE `cultivo_siembras`');
  }
}
