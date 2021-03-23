import { Injectable } from '@nestjs/common';
import { Asociado } from 'src/associates/entities/associates.entity';
import { CultivoSiembra } from 'src/cultivo/entities/cultivo.entity';
import { Niame } from 'src/niame/entities/niame.entity';
import { getManager } from 'typeorm';

@Injectable()
export class ReportesService {
  async getAllInArray() {
    return getManager()
      .createQueryBuilder(CultivoSiembra, 'cs')
      .addSelect('SUM(cs.hectareas_sembradas)', 'hectareas')
      .addSelect('SUM(cs.kg_espera_cosechar)', 'kgEsperaCosechar')
      .addSelect('SUM(cs.costo_total_siembra)', 'costoTotal')
      .addSelect('n.nombre', 'niame')
      .addSelect('a.nombre', 'asociado')
      .addSelect('a.id_asociado', 'asociadoId')
      .innerJoin(Niame, 'n', 'cs.niameIdNiame = n.id_niame')
      .innerJoin(Asociado, 'a', 'cs.asociadoIdAsociado = a.id_asociado')
      .getRawMany();
  }

  async getMany() {
    return getManager().query(
      'SELECT SUM(cs.hectareas_sembradas) as hectareas, SUM(cs.kg_espera_cosechar), SUM(cs.costo_total_siembra), n.nombre, a.nombre, a.id_asociado FROM cultivo_siembras AS cs INNER JOIN niames AS n ON cs.niameIdNiame = n.id_niame INNER JOIN asociados AS a ON cs.asociadoIdAsociado = a.id_asociado GROUP BY n.id_niame,a.id_asociado',
    );
  }
}
