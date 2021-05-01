import { IsOptional, IsString } from 'class-validator';

export class VentaDetalleDto {
  niameId: string;
  cantidad: number;
}

export class VentaDto {
  @IsString()
  nota: string;

  @IsOptional()
  ventaDetalles: VentaDetalleDto[];
}
