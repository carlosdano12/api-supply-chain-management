import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CultivoDto {
  @IsString()
  @IsNotEmpty()
  asociadoId: string;

  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  niameId: string;

  fecha_inicio_siembra: Date;

  fecha_fin_siembra: Date;

  @IsNumber()
  hectareas_sembradas: number;

  @IsNumber()
  kg_espera_cosechar: number;

  @IsNumber()
  costo_total_siembra: number;
}
