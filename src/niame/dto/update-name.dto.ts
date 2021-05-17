import { IsNumber, IsNumberString, IsOptional, IsString } from 'class-validator';

export class UpdateNiameDto {
  @IsString()
  @IsOptional()
  nombre: string;

  @IsOptional()
  @IsNumber()
  cantidad: number;

  @IsOptional()
  @IsNumber()
  precio: number;
}
