import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CultivoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  id_niame: string;

  @ApiProperty({ format: 'date' })
  @IsString()
  fecha_inicio_siembra: Date;

  @ApiProperty({ format: 'date' })
  @IsString()
  fecha_fin_siembra: Date;

  @IsNumber()
  hectareas_sembradas: number;

  @IsNumber()
  kg_espera_cosechar: number;

  @IsNumber()
  costo_total_siembra: number;
}
