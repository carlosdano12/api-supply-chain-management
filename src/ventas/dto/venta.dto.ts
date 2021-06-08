import { IsNumber, IsOptional, IsString } from 'class-validator';

export class VentaDetalleDto {
  niameId: string;
  cantidad: number;
  precio: number;
  total: number;
}

export class VentaDto {
  @IsString()
  nota: string;

  @IsNumber()
  total: number;

  @IsOptional()
  ventaDetalles: VentaDetalleDto[];
}
