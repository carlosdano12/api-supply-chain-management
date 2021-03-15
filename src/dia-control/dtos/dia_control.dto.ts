import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class IDiaControlInsumo {
  insumoId: string;
  cantidad: number;
}
export class IDiaControl {
  @ApiProperty({ format: 'date' })
  @IsString()
  fechaControl: Date;

  @IsString()
  descripcion: string;

  @IsString()
  cultivoIdCultivo: string;
  @IsOptional()
  diasControlInsumos: IDiaControlInsumo[];
}
