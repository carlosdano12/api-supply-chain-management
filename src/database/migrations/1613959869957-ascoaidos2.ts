import { MigrationInterface, QueryRunner } from 'typeorm';

export class ascoaidos21613959869957 implements MigrationInterface {
  name = 'ascoaidos21613959869957';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `cultivo_siembras` DROP COLUMN `asociadoId`');
    await queryRunner.query('ALTER TABLE `cultivo_siembras` DROP COLUMN `niameId`');
    await queryRunner.query('ALTER TABLE `cultivo_siembras` DROP FOREIGN KEY `FK_fc7e63f0a0a7c829f7454f539d6`');
    await queryRunner.query('ALTER TABLE `cultivo_siembras` DROP FOREIGN KEY `FK_4c7ae15837423af4db2b784f4c2`');
    await queryRunner.query('ALTER TABLE `cultivo_siembras` DROP COLUMN `asociadoIdAsociado`');
    await queryRunner.query('ALTER TABLE `cultivo_siembras` ADD `asociadoIdAsociado` varchar(255) NOT NULL');
    await queryRunner.query('ALTER TABLE `cultivo_siembras` DROP COLUMN `niameIdNiame`');
    await queryRunner.query('ALTER TABLE `cultivo_siembras` ADD `niameIdNiame` varchar(255) NOT NULL');
    await queryRunner.query(
      'ALTER TABLE `cultivo_siembras` CHANGE `hectareas_sembradas` `hectareas_sembradas` decimal(13,2) NULL',
    );
    await queryRunner.query(
      'ALTER TABLE `cultivo_siembras` CHANGE `kg_espera_cosechar` `kg_espera_cosechar` decimal(13,2) NULL',
    );
    await queryRunner.query(
      'ALTER TABLE `cultivo_siembras` CHANGE `costo_total_siembra` `costo_total_siembra` decimal(13,2) NULL',
    );
    await queryRunner.query('ALTER TABLE `cultivo_cosecha` DROP FOREIGN KEY `FK_26a1c272c093f7ae933ba2cf5d8`');
    await queryRunner.query('ALTER TABLE `cultivo_cosecha` DROP FOREIGN KEY `FK_2b4eaf382ea9db415ae87723ff6`');
    await queryRunner.query('ALTER TABLE `cultivo_cosecha` CHANGE `kg_cosechados` `kg_cosechados` decimal(13,2) NULL');
    await queryRunner.query(
      'ALTER TABLE `cultivo_cosecha` CHANGE `kg_cosechados_bien` `kg_cosechados_bien` decimal(13,2) NULL',
    );
    await queryRunner.query(
      'ALTER TABLE `cultivo_cosecha` CHANGE `costo_total_cosecha` `costo_total_cosecha` decimal(13,2) NULL',
    );
    await queryRunner.query(
      'ALTER TABLE `cultivo_cosecha` CHANGE `cultivoIdCultivo` `cultivoIdCultivo` varchar(36) NULL',
    );
    await queryRunner.query(
      'ALTER TABLE `cultivo_cosecha` CHANGE `asociadoIdAsociado` `asociadoIdAsociado` varchar(36) NULL',
    );
    await queryRunner.query(
      'ALTER TABLE `cultivo_siembras` ADD CONSTRAINT `FK_fc7e63f0a0a7c829f7454f539d6` FOREIGN KEY (`asociadoIdAsociado`) REFERENCES `asociados`(`id_asociado`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `cultivo_siembras` ADD CONSTRAINT `FK_4c7ae15837423af4db2b784f4c2` FOREIGN KEY (`niameIdNiame`) REFERENCES `niames`(`id_niame`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `cultivo_cosecha` ADD CONSTRAINT `FK_26a1c272c093f7ae933ba2cf5d8` FOREIGN KEY (`cultivoIdCultivo`) REFERENCES `cultivo_siembras`(`id_cultivo`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `cultivo_cosecha` ADD CONSTRAINT `FK_2b4eaf382ea9db415ae87723ff6` FOREIGN KEY (`asociadoIdAsociado`) REFERENCES `asociados`(`id_asociado`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `cultivo_cosecha` DROP FOREIGN KEY `FK_2b4eaf382ea9db415ae87723ff6`');
    await queryRunner.query('ALTER TABLE `cultivo_cosecha` DROP FOREIGN KEY `FK_26a1c272c093f7ae933ba2cf5d8`');
    await queryRunner.query('ALTER TABLE `cultivo_siembras` DROP FOREIGN KEY `FK_4c7ae15837423af4db2b784f4c2`');
    await queryRunner.query('ALTER TABLE `cultivo_siembras` DROP FOREIGN KEY `FK_fc7e63f0a0a7c829f7454f539d6`');
    await queryRunner.query(
      "ALTER TABLE `cultivo_cosecha` CHANGE `asociadoIdAsociado` `asociadoIdAsociado` varchar(36) NULL DEFAULT 'NULL'",
    );
    await queryRunner.query(
      "ALTER TABLE `cultivo_cosecha` CHANGE `cultivoIdCultivo` `cultivoIdCultivo` varchar(36) NULL DEFAULT 'NULL'",
    );
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
      'ALTER TABLE `cultivo_cosecha` ADD CONSTRAINT `FK_2b4eaf382ea9db415ae87723ff6` FOREIGN KEY (`asociadoIdAsociado`) REFERENCES `asociados`(`id_asociado`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `cultivo_cosecha` ADD CONSTRAINT `FK_26a1c272c093f7ae933ba2cf5d8` FOREIGN KEY (`cultivoIdCultivo`) REFERENCES `cultivo_siembras`(`id_cultivo`) ON DELETE NO ACTION ON UPDATE NO ACTION',
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
    await queryRunner.query('ALTER TABLE `cultivo_siembras` DROP COLUMN `niameIdNiame`');
    await queryRunner.query("ALTER TABLE `cultivo_siembras` ADD `niameIdNiame` varchar(36) NULL DEFAULT 'NULL'");
    await queryRunner.query('ALTER TABLE `cultivo_siembras` DROP COLUMN `asociadoIdAsociado`');
    await queryRunner.query("ALTER TABLE `cultivo_siembras` ADD `asociadoIdAsociado` varchar(36) NULL DEFAULT 'NULL'");
    await queryRunner.query(
      'ALTER TABLE `cultivo_siembras` ADD CONSTRAINT `FK_4c7ae15837423af4db2b784f4c2` FOREIGN KEY (`niameIdNiame`) REFERENCES `niames`(`id_niame`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `cultivo_siembras` ADD CONSTRAINT `FK_fc7e63f0a0a7c829f7454f539d6` FOREIGN KEY (`asociadoIdAsociado`) REFERENCES `asociados`(`id_asociado`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
    await queryRunner.query('ALTER TABLE `cultivo_siembras` ADD `niameId` varchar(255) NOT NULL');
    await queryRunner.query('ALTER TABLE `cultivo_siembras` ADD `asociadoId` varchar(255) NOT NULL');
  }
}
