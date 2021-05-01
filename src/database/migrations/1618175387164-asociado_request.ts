import { MigrationInterface, QueryRunner } from 'typeorm';

export class asociadoRequest1618175387164 implements MigrationInterface {
  name = 'asociadoRequest1618175387164';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `asociados_solicitudes` (`id` varchar(36) NOT NULL, `nombre` varchar(45) NOT NULL, `apellido` varchar(45) NOT NULL, `documento` varchar(15) NOT NULL, `telefono` varchar(15) NOT NULL, `descripcion` varchar(255) NOT NULL, `estado` tinyint NOT NULL DEFAULT 1, UNIQUE INDEX `IDX_df86e2eb4cf497c0f2207f90ab` (`documento`), UNIQUE INDEX `IDX_5753d51dfbea1878ea5a51d5a6` (`telefono`), PRIMARY KEY (`id`)) ENGINE=InnoDB',
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
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
    await queryRunner.query('DROP INDEX `IDX_5753d51dfbea1878ea5a51d5a6` ON `asociados_solicitudes`');
    await queryRunner.query('DROP INDEX `IDX_df86e2eb4cf497c0f2207f90ab` ON `asociados_solicitudes`');
    await queryRunner.query('DROP TABLE `asociados_solicitudes`');
  }
}
