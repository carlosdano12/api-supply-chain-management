import { MigrationInterface, QueryRunner } from 'typeorm';

export class ventas1619898887301 implements MigrationInterface {
  name = 'ventas1619898887301';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `ventas_encabezado` (`id` varchar(36) NOT NULL, `asociadoIdAsociado` varchar(255) NOT NULL, `nota` varchar(45) NOT NULL, `fechaVenta` date NOT NULL DEFAULT now(), `estado` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'CREATE TABLE `venta_detalle` (`id` varchar(36) NOT NULL, `ventaEncabezadoId` varchar(255) NOT NULL, `cantidad` decimal(13,2) NULL, `estado` tinyint NOT NULL DEFAULT 0, `niameIdNiame` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'ALTER TABLE `compras_encabezado` CHANGE `fechaSolicitud` `fechaSolicitud` date NOT NULL DEFAULT now()',
    );
    await queryRunner.query(
      'ALTER TABLE `compras_encabezado` CHANGE `fechaCompra` `fechaCompra` date NOT NULL DEFAULT now()',
    );
    await queryRunner.query('ALTER TABLE `compra_detalle` CHANGE `cantidad` `cantidad` decimal(13,2) NULL');
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
    await queryRunner.query('ALTER TABLE `dias_control_insumos` CHANGE `cantidad` `cantidad` decimal(13,2) NULL');
    await queryRunner.query(
      'ALTER TABLE `transporte` CHANGE `fechaSolicitud` `fechaSolicitud` date NOT NULL DEFAULT now()',
    );
    await queryRunner.query(
      'ALTER TABLE `transporte` CHANGE `fechaEntrega` `fechaEntrega` date NOT NULL DEFAULT now()',
    );
    await queryRunner.query('ALTER TABLE `transporte_detalle` CHANGE `cantidad` `cantidad` decimal(13,2) NULL');
    await queryRunner.query(
      'ALTER TABLE `ventas_encabezado` ADD CONSTRAINT `FK_d5706c1446500eeb2972d341361` FOREIGN KEY (`asociadoIdAsociado`) REFERENCES `asociados`(`id_asociado`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `venta_detalle` ADD CONSTRAINT `FK_6dd731142d80693853761b9562b` FOREIGN KEY (`ventaEncabezadoId`) REFERENCES `ventas_encabezado`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `venta_detalle` ADD CONSTRAINT `FK_de46914ffeb7efdbb333cecc772` FOREIGN KEY (`niameIdNiame`) REFERENCES `niames`(`id_niame`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `venta_detalle` DROP FOREIGN KEY `FK_de46914ffeb7efdbb333cecc772`');
    await queryRunner.query('ALTER TABLE `venta_detalle` DROP FOREIGN KEY `FK_6dd731142d80693853761b9562b`');
    await queryRunner.query('ALTER TABLE `ventas_encabezado` DROP FOREIGN KEY `FK_d5706c1446500eeb2972d341361`');
    await queryRunner.query(
      "ALTER TABLE `transporte_detalle` CHANGE `cantidad` `cantidad` decimal(13,2) NULL DEFAULT 'NULL'",
    );
    await queryRunner.query(
      'ALTER TABLE `transporte` CHANGE `fechaEntrega` `fechaEntrega` date NOT NULL DEFAULT CURRENT_TIMESTAMP()',
    );
    await queryRunner.query(
      'ALTER TABLE `transporte` CHANGE `fechaSolicitud` `fechaSolicitud` date NOT NULL DEFAULT CURRENT_TIMESTAMP()',
    );
    await queryRunner.query(
      "ALTER TABLE `dias_control_insumos` CHANGE `cantidad` `cantidad` decimal(13,2) NULL DEFAULT 'NULL'",
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
      "ALTER TABLE `cultivo_siembras` CHANGE `costo_total_siembra` `costo_total_siembra` decimal(13,2) NULL DEFAULT 'NULL'",
    );
    await queryRunner.query(
      "ALTER TABLE `cultivo_siembras` CHANGE `kg_espera_cosechar` `kg_espera_cosechar` decimal(13,2) NULL DEFAULT 'NULL'",
    );
    await queryRunner.query(
      "ALTER TABLE `cultivo_siembras` CHANGE `hectareas_sembradas` `hectareas_sembradas` decimal(13,2) NULL DEFAULT 'NULL'",
    );
    await queryRunner.query(
      "ALTER TABLE `compra_detalle` CHANGE `cantidad` `cantidad` decimal(13,2) NULL DEFAULT 'NULL'",
    );
    await queryRunner.query(
      'ALTER TABLE `compras_encabezado` CHANGE `fechaCompra` `fechaCompra` date NOT NULL DEFAULT CURRENT_TIMESTAMP()',
    );
    await queryRunner.query(
      'ALTER TABLE `compras_encabezado` CHANGE `fechaSolicitud` `fechaSolicitud` date NOT NULL DEFAULT CURRENT_TIMESTAMP()',
    );
    await queryRunner.query('DROP TABLE `venta_detalle`');
    await queryRunner.query('DROP TABLE `ventas_encabezado`');
  }
}
