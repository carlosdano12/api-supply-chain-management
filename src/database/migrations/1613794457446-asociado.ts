import { MigrationInterface, QueryRunner } from 'typeorm';

export class asociado1613794457446 implements MigrationInterface {
  name = 'asociado1613794457446';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `asociados` (`id_asociado` varchar(36) NOT NULL, `nombre` varchar(45) NOT NULL, `apellido` varchar(45) NOT NULL, `id_documento` smallint NOT NULL, `documento` varchar(15) NOT NULL, `contrasena` varchar(50) NOT NULL, `telefono` varchar(15) NOT NULL, UNIQUE INDEX `IDX_55e58a2bb08f3d42b73ebd1033` (`documento`), UNIQUE INDEX `IDX_efc3b680dae8bbed15700152a0` (`telefono`), PRIMARY KEY (`id_asociado`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'CREATE TABLE `roles` (`id_rol` varchar(36) NOT NULL, `nombre` varchar(45) NOT NULL, PRIMARY KEY (`id_rol`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'CREATE TABLE `asociados_roles_roles` (`asociadosIdAsociado` varchar(36) NOT NULL, `rolesIdRol` varchar(36) NOT NULL, INDEX `IDX_3501b96c8cbea185f984870999` (`asociadosIdAsociado`), INDEX `IDX_ecc07b095229551be1c430f2ba` (`rolesIdRol`), PRIMARY KEY (`asociadosIdAsociado`, `rolesIdRol`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'ALTER TABLE `asociados_roles_roles` ADD CONSTRAINT `FK_3501b96c8cbea185f9848709999` FOREIGN KEY (`asociadosIdAsociado`) REFERENCES `asociados`(`id_asociado`) ON DELETE CASCADE ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `asociados_roles_roles` ADD CONSTRAINT `FK_ecc07b095229551be1c430f2ba1` FOREIGN KEY (`rolesIdRol`) REFERENCES `roles`(`id_rol`) ON DELETE CASCADE ON UPDATE NO ACTION',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `asociados_roles_roles` DROP FOREIGN KEY `FK_ecc07b095229551be1c430f2ba1`');
    await queryRunner.query('ALTER TABLE `asociados_roles_roles` DROP FOREIGN KEY `FK_3501b96c8cbea185f9848709999`');
    await queryRunner.query('DROP INDEX `IDX_ecc07b095229551be1c430f2ba` ON `asociados_roles_roles`');
    await queryRunner.query('DROP INDEX `IDX_3501b96c8cbea185f984870999` ON `asociados_roles_roles`');
    await queryRunner.query('DROP TABLE `asociados_roles_roles`');
    await queryRunner.query('DROP TABLE `roles`');
    await queryRunner.query('DROP INDEX `IDX_efc3b680dae8bbed15700152a0` ON `asociados`');
    await queryRunner.query('DROP INDEX `IDX_55e58a2bb08f3d42b73ebd1033` ON `asociados`');
    await queryRunner.query('DROP TABLE `asociados`');
  }
}
