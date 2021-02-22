import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CultivoCosechaDto {
  @IsString()
  @IsNotEmpty()
  cultivoIdCultivo: string;

  @IsString()
  @IsNotEmpty()
  asociadoIdAsociado: string;

  @ApiProperty({ format: 'date' })
  @IsString()
  fecha_inicio_cosecha: Date;

  @ApiProperty({ format: 'date' })
  @IsString()
  fecha_fin_cosecha: Date;

  @IsNumber()
  kg_cosechados: number;

  @IsNumber()
  kg_cosechados_bien: number;

  @IsNumber()
  costo_total_cosecha: number;
}
