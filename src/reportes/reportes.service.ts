import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';

@Injectable()
export class ReportesService {
  async getMany() {
    return getManager().query(
      'SELECT SUM(cs.hectareas_sembradas) as hectareas, SUM(cs.kg_espera_cosechar) as kgEsperaCosechar, SUM(cs.costo_total_siembra) as costoTotal, n.nombre, a.nombre, a.id_asociado FROM cultivo_siembras AS cs INNER JOIN niames AS n ON cs.niameIdNiame = n.id_niame INNER JOIN asociados AS a ON cs.asociadoIdAsociado = a.id_asociado GROUP BY n.id_niame,a.id_asociado',
    );
  }
}
