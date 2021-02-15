import { MigrationInterface, QueryRunner } from 'typeorm';

export class niame1613360291130 implements MigrationInterface {
  name = 'niame1613360291130';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `niames` (`id_niame` varchar(36) NOT NULL, `nombre` varchar(45) NOT NULL, PRIMARY KEY (`id_niame`)) ENGINE=InnoDB',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `niames`');
  }
}
