import { MigrationInterface, QueryRunner } from 'typeorm';

export class cultivos31613963524747 implements MigrationInterface {
  name = 'cultivos31613963524747';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `cultivo_cosecha` DROP COLUMN `cultivoId`');
    await queryRunner.query('ALTER TABLE `cultivo_cosecha` DROP COLUMN `asociadoId`');
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
    await queryRunner.query('ALTER TABLE `cultivo_cosecha` DROP COLUMN `cultivoIdCultivo`');
    await queryRunner.query('ALTER TABLE `cultivo_cosecha` ADD `cultivoIdCultivo` varchar(255) NOT NULL');
    await queryRunner.query('ALTER TABLE `cultivo_cosecha` DROP COLUMN `asociadoIdAsociado`');
    await queryRunner.query('ALTER TABLE `cultivo_cosecha` ADD `asociadoIdAsociado` varchar(255) NOT NULL');
    await queryRunner.query('ALTER TABLE `cultivo_cosecha` CHANGE `kg_cosechados` `kg_cosechados` decimal(13,2) NULL');
    await queryRunner.query(
      'ALTER TABLE `cultivo_cosecha` CHANGE `kg_cosechados_bien` `kg_cosechados_bien` decimal(13,2) NULL',
    );
    await queryRunner.query(
      'ALTER TABLE `cultivo_cosecha` CHANGE `costo_total_cosecha` `costo_total_cosecha` decimal(13,2) NULL',
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
    await queryRunner.query(
      "ALTER TABLE `cultivo_cosecha` CHANGE `costo_total_cosecha` `costo_total_cosecha` decimal(13,2) NULL DEFAULT 'NULL'",
    );
    await queryRunner.query(
      "ALTER TABLE `cultivo_cosecha` CHANGE `kg_cosechados_bien` `kg_cosechados_bien` decimal(13,2) NULL DEFAULT 'NULL'",
    );
    await queryRunner.query(
      "ALTER TABLE `cultivo_cosecha` CHANGE `kg_cosechados` `kg_cosechados` decimal(13,2) NULL DEFAULT 'NULL'",
    );
    await queryRunner.query('ALTER TABLE `cultivo_cosecha` DROP COLUMN `asociadoIdAsociado`');
    await queryRunner.query("ALTER TABLE `cultivo_cosecha` ADD `asociadoIdAsociado` varchar(36) NULL DEFAULT 'NULL'");
    await queryRunner.query('ALTER TABLE `cultivo_cosecha` DROP COLUMN `cultivoIdCultivo`');
    await queryRunner.query("ALTER TABLE `cultivo_cosecha` ADD `cultivoIdCultivo` varchar(36) NULL DEFAULT 'NULL'");
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
    await queryRunner.query('ALTER TABLE `cultivo_cosecha` ADD `asociadoId` varchar(255) NOT NULL');
    await queryRunner.query('ALTER TABLE `cultivo_cosecha` ADD `cultivoId` varchar(255) NOT NULL');
  }
}
