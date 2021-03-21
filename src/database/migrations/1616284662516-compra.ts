import {MigrationInterface, QueryRunner} from "typeorm";

export class compra1616284662516 implements MigrationInterface {
    name = 'compra1616284662516'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `compras_encabezado` (`id` varchar(36) NOT NULL, `asociadoIdAsociado` varchar(255) NOT NULL, `nota` varchar(45) NOT NULL, `fechaSolicitud` date NOT NULL DEFAULT now(), `fechaCompra` date NOT NULL DEFAULT now(), `estado` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `compra_detalle` (`id` varchar(36) NOT NULL, `compraEncabezadoId` varchar(255) NOT NULL, `insumoId` varchar(255) NOT NULL, `cantidad` decimal(13,2) NULL, `estado` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `cultivo_siembras` CHANGE `hectareas_sembradas` `hectareas_sembradas` decimal(13,2) NULL");
        await queryRunner.query("ALTER TABLE `cultivo_siembras` CHANGE `kg_espera_cosechar` `kg_espera_cosechar` decimal(13,2) NULL");
        await queryRunner.query("ALTER TABLE `cultivo_siembras` CHANGE `costo_total_siembra` `costo_total_siembra` decimal(13,2) NULL");
        await queryRunner.query("ALTER TABLE `cultivo_cosecha` CHANGE `kg_cosechados` `kg_cosechados` decimal(13,2) NULL");
        await queryRunner.query("ALTER TABLE `cultivo_cosecha` CHANGE `kg_cosechados_bien` `kg_cosechados_bien` decimal(13,2) NULL");
        await queryRunner.query("ALTER TABLE `cultivo_cosecha` CHANGE `costo_total_cosecha` `costo_total_cosecha` decimal(13,2) NULL");
        await queryRunner.query("ALTER TABLE `dias_control_insumos` CHANGE `cantidad` `cantidad` decimal(13,2) NULL");
        await queryRunner.query("ALTER TABLE `compras_encabezado` ADD CONSTRAINT `FK_34c7da8bf2cd44e2a029aa13d87` FOREIGN KEY (`asociadoIdAsociado`) REFERENCES `asociados`(`id_asociado`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `compra_detalle` ADD CONSTRAINT `FK_288f91b1d344e593aef0c1323a5` FOREIGN KEY (`compraEncabezadoId`) REFERENCES `compras_encabezado`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `compra_detalle` ADD CONSTRAINT `FK_0bab75ce3a4c06ce096cc9edcba` FOREIGN KEY (`insumoId`) REFERENCES `insumos`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `compra_detalle` DROP FOREIGN KEY `FK_0bab75ce3a4c06ce096cc9edcba`");
        await queryRunner.query("ALTER TABLE `compra_detalle` DROP FOREIGN KEY `FK_288f91b1d344e593aef0c1323a5`");
        await queryRunner.query("ALTER TABLE `compras_encabezado` DROP FOREIGN KEY `FK_34c7da8bf2cd44e2a029aa13d87`");
        await queryRunner.query("ALTER TABLE `dias_control_insumos` CHANGE `cantidad` `cantidad` decimal(13,2) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `cultivo_cosecha` CHANGE `costo_total_cosecha` `costo_total_cosecha` decimal(13,2) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `cultivo_cosecha` CHANGE `kg_cosechados_bien` `kg_cosechados_bien` decimal(13,2) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `cultivo_cosecha` CHANGE `kg_cosechados` `kg_cosechados` decimal(13,2) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `cultivo_siembras` CHANGE `costo_total_siembra` `costo_total_siembra` decimal(13,2) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `cultivo_siembras` CHANGE `kg_espera_cosechar` `kg_espera_cosechar` decimal(13,2) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `cultivo_siembras` CHANGE `hectareas_sembradas` `hectareas_sembradas` decimal(13,2) NULL DEFAULT 'NULL'");
        await queryRunner.query("DROP TABLE `compra_detalle`");
        await queryRunner.query("DROP TABLE `compras_encabezado`");
    }

}
