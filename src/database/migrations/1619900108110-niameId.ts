import {MigrationInterface, QueryRunner} from "typeorm";

export class niameId1619900108110 implements MigrationInterface {
    name = 'niameId1619900108110'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `compras_encabezado` CHANGE `nota` `nota` varchar(45) NULL");
        await queryRunner.query("ALTER TABLE `compras_encabezado` CHANGE `fechaSolicitud` `fechaSolicitud` date NOT NULL DEFAULT now()");
        await queryRunner.query("ALTER TABLE `compras_encabezado` CHANGE `fechaCompra` `fechaCompra` date NOT NULL DEFAULT now()");
        await queryRunner.query("ALTER TABLE `compra_detalle` CHANGE `cantidad` `cantidad` decimal(13,2) NULL");
        await queryRunner.query("ALTER TABLE `cultivo_siembras` CHANGE `hectareas_sembradas` `hectareas_sembradas` decimal(13,2) NULL");
        await queryRunner.query("ALTER TABLE `cultivo_siembras` CHANGE `kg_espera_cosechar` `kg_espera_cosechar` decimal(13,2) NULL");
        await queryRunner.query("ALTER TABLE `cultivo_siembras` CHANGE `costo_total_siembra` `costo_total_siembra` decimal(13,2) NULL");
        await queryRunner.query("ALTER TABLE `cultivo_cosecha` CHANGE `kg_cosechados` `kg_cosechados` decimal(13,2) NULL");
        await queryRunner.query("ALTER TABLE `cultivo_cosecha` CHANGE `kg_cosechados_bien` `kg_cosechados_bien` decimal(13,2) NULL");
        await queryRunner.query("ALTER TABLE `cultivo_cosecha` CHANGE `costo_total_cosecha` `costo_total_cosecha` decimal(13,2) NULL");
        await queryRunner.query("ALTER TABLE `dias_control_insumos` CHANGE `cantidad` `cantidad` decimal(13,2) NULL");
        await queryRunner.query("ALTER TABLE `transporte` CHANGE `nota` `nota` varchar(45) NULL");
        await queryRunner.query("ALTER TABLE `transporte` CHANGE `fechaSolicitud` `fechaSolicitud` date NOT NULL DEFAULT now()");
        await queryRunner.query("ALTER TABLE `transporte` CHANGE `fechaEntrega` `fechaEntrega` date NOT NULL DEFAULT now()");
        await queryRunner.query("ALTER TABLE `transporte_detalle` CHANGE `cantidad` `cantidad` decimal(13,2) NULL");
        await queryRunner.query("ALTER TABLE `ventas_encabezado` CHANGE `nota` `nota` varchar(45) NULL");
        await queryRunner.query("ALTER TABLE `ventas_encabezado` CHANGE `fechaVenta` `fechaVenta` date NOT NULL DEFAULT now()");
        await queryRunner.query("ALTER TABLE `venta_detalle` CHANGE `cantidad` `cantidad` decimal(13,2) NULL");
        await queryRunner.query("ALTER TABLE `venta_detalle` ADD CONSTRAINT `FK_de46914ffeb7efdbb333cecc772` FOREIGN KEY (`niameIdNiame`) REFERENCES `niames`(`id_niame`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `venta_detalle` DROP FOREIGN KEY `FK_de46914ffeb7efdbb333cecc772`");
        await queryRunner.query("ALTER TABLE `venta_detalle` CHANGE `cantidad` `cantidad` decimal(13,2) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `ventas_encabezado` CHANGE `fechaVenta` `fechaVenta` date NOT NULL DEFAULT CURRENT_TIMESTAMP()");
        await queryRunner.query("ALTER TABLE `ventas_encabezado` CHANGE `nota` `nota` varchar(45) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `transporte_detalle` CHANGE `cantidad` `cantidad` decimal(13,2) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `transporte` CHANGE `fechaEntrega` `fechaEntrega` date NOT NULL DEFAULT CURRENT_TIMESTAMP()");
        await queryRunner.query("ALTER TABLE `transporte` CHANGE `fechaSolicitud` `fechaSolicitud` date NOT NULL DEFAULT CURRENT_TIMESTAMP()");
        await queryRunner.query("ALTER TABLE `transporte` CHANGE `nota` `nota` varchar(45) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `dias_control_insumos` CHANGE `cantidad` `cantidad` decimal(13,2) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `cultivo_cosecha` CHANGE `costo_total_cosecha` `costo_total_cosecha` decimal(13,2) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `cultivo_cosecha` CHANGE `kg_cosechados_bien` `kg_cosechados_bien` decimal(13,2) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `cultivo_cosecha` CHANGE `kg_cosechados` `kg_cosechados` decimal(13,2) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `cultivo_siembras` CHANGE `costo_total_siembra` `costo_total_siembra` decimal(13,2) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `cultivo_siembras` CHANGE `kg_espera_cosechar` `kg_espera_cosechar` decimal(13,2) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `cultivo_siembras` CHANGE `hectareas_sembradas` `hectareas_sembradas` decimal(13,2) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `compra_detalle` CHANGE `cantidad` `cantidad` decimal(13,2) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `compras_encabezado` CHANGE `fechaCompra` `fechaCompra` date NOT NULL DEFAULT CURRENT_TIMESTAMP()");
        await queryRunner.query("ALTER TABLE `compras_encabezado` CHANGE `fechaSolicitud` `fechaSolicitud` date NOT NULL DEFAULT CURRENT_TIMESTAMP()");
        await queryRunner.query("ALTER TABLE `compras_encabezado` CHANGE `nota` `nota` varchar(45) NULL DEFAULT 'NULL'");
    }

}
