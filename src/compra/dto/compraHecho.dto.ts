import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CompraDetalleDto {
  insumoId: string;
  cantidad: number;
  precio: number;
  total: number;
}
export class CompraHechoDto {
  @IsString()
  nota: string;

  @IsNumber()
  total: number;

  @IsOptional()
  compraDetalles: CompraDetalleDto[];
}
