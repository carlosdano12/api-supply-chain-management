import { IsOptional, IsString } from 'class-validator';

export class CompraDetalleDto {
  insumoId: string;
  cantidad: number;
}
export class CompraDto {
  @IsString()
  nota: string;

  @IsOptional()
  compraDetalles: CompraDetalleDto[];
}
