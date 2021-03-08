import { MigrationInterface, QueryRunner } from 'typeorm';

export class diaControl1615153447888 implements MigrationInterface {
  name = 'diaControl1615153447888';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `dias_control` (`id` varchar(36) NOT NULL, `fechaControl` date NOT NULL, `descripcion` varchar(200) NOT NULL, `cultivoIdCultivo` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'CREATE TABLE `dias_control_insumos` (`id` varchar(36) NOT NULL, `diaControlId` varchar(255) NOT NULL, `insumoId` varchar(255) NOT NULL, `cantidad` decimal(13,2) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
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
    await queryRunner.query(
      'ALTER TABLE `dias_control` ADD CONSTRAINT `FK_46712d3f9adab8acf84c7f5f71a` FOREIGN KEY (`cultivoIdCultivo`) REFERENCES `cultivo_siembras`(`id_cultivo`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `dias_control_insumos` ADD CONSTRAINT `FK_868fb889c6c5a19ce527e0455ba` FOREIGN KEY (`diaControlId`) REFERENCES `dias_control`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `dias_control_insumos` ADD CONSTRAINT `FK_92c7b84df9254208e4a159c5c69` FOREIGN KEY (`insumoId`) REFERENCES `insumos`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `dias_control_insumos` DROP FOREIGN KEY `FK_92c7b84df9254208e4a159c5c69`');
    await queryRunner.query('ALTER TABLE `dias_control_insumos` DROP FOREIGN KEY `FK_868fb889c6c5a19ce527e0455ba`');
    await queryRunner.query('ALTER TABLE `dias_control` DROP FOREIGN KEY `FK_46712d3f9adab8acf84c7f5f71a`');
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
    await queryRunner.query('DROP TABLE `dias_control_insumos`');
    await queryRunner.query('DROP TABLE `dias_control`');
  }
}
