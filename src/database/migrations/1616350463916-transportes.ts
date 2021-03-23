import {MigrationInterface, QueryRunner} from "typeorm";

export class transportes1616350463916 implements MigrationInterface {
    name = 'transportes1616350463916'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `transporte` (`id` varchar(36) NOT NULL, `asociadoIdAsociado` varchar(255) NOT NULL, `nota` varchar(45) NOT NULL, `fechaSolicitud` date NOT NULL DEFAULT now(), `fechaEntrega` date NOT NULL DEFAULT now(), `estado` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `transporte_detalle` (`id` varchar(36) NOT NULL, `transporteId` varchar(255) NOT NULL, `niameIdNiame` varchar(255) NOT NULL, `cantidad` decimal(13,2) NULL, `estado` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (`id`)) ENGINE=InnoDB");
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
        await queryRunner.query("ALTER TABLE `transporte` ADD CONSTRAINT `FK_e2aa53f2854f78a70e12c7a4c32` FOREIGN KEY (`asociadoIdAsociado`) REFERENCES `asociados`(`id_asociado`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `transporte_detalle` ADD CONSTRAINT `FK_8a461c87c0974a4d7389b5d06e3` FOREIGN KEY (`transporteId`) REFERENCES `transporte`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `transporte_detalle` ADD CONSTRAINT `FK_e1e3c36d01cf1b61aa6b1dc0ff6` FOREIGN KEY (`niameIdNiame`) REFERENCES `niames`(`id_niame`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `transporte_detalle` DROP FOREIGN KEY `FK_e1e3c36d01cf1b61aa6b1dc0ff6`");
        await queryRunner.query("ALTER TABLE `transporte_detalle` DROP FOREIGN KEY `FK_8a461c87c0974a4d7389b5d06e3`");
        await queryRunner.query("ALTER TABLE `transporte` DROP FOREIGN KEY `FK_e2aa53f2854f78a70e12c7a4c32`");
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
        await queryRunner.query("DROP TABLE `transporte_detalle`");
        await queryRunner.query("DROP TABLE `transporte`");
    }

}
