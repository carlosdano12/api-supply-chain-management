import { IsOptional, IsString } from 'class-validator';

export class TransporteDetalleDto {
  niameIdNiame: string;
  cantidad: number;
}
export class TransporteDto {
  @IsString()
  nota: string;

  @IsOptional()
  transporteDetalles: TransporteDetalleDto[];
}
